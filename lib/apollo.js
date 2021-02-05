import { useMemo } from 'react';
import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import {
	getRefreshTokenLink,
	FetchNewNewAccessToken,
} from 'apollo-link-refresh-token';
import { getAccessToken, setAccessToken } from './accessToken';
import jwtDecode from 'jwt-decode';
import { v4 } from 'uuid';

let apolloClient;

function createApolloClient() {
	// create an authentication link
	const authLink = setContext((_, { headers }) => {
		// get the authentication token from local storage if it exists
		// sessionStorage vs. localStorage
		const token = getAccessToken();
		// return the headers to the context so httpLink can read them
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : '',
			},
		};
	});

	const httpLink = new HttpLink({
		uri: 'https://dev-wpheadless-next.pantheonsite.io/graphql',
	});

	const errorLink = new onError(({ graphQLErrors, networkErrors }) => {
		console.log(graphQLErrors);
		console.log(networkErrors);
	});

	const isTokenValid = token => {
		const jwtToken = getAccessToken();

		if (!jwtToken) {
			return true;
		}

		try {
			const { exp } = jwtDecode(jwtToken);
			if (Date.now() >= exp * 1000) {
				return false;
			} else {
				return true;
			}
		} catch {
			return false;
		}
	};

	const fetchNewAccessToken = async refreshToken => {
		if (!process.env.WORDPRESS_LOCAL_API_URL) {
			throw new Error(
				'.env.WORDPRESS_LOCAL_API_URL must be set to use refresh token link',
			);
		}

		try {
			const fetchResult = await fetch(process.env.WORDPRESS_LOCAL_API_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					query: gql`
						mutation {
							refreshJwtAuthToken(
								input: {
									refreshJwtAuthToken: ${refreshTokens}
									clientMutationId: ${v4()}
								}
							) {
								authToken
							}
						}
					`,
				}),
			});

			const refreshResponse = await fetchResult.json();

			if (
				!refreshResponse ||
				!refreshResponse.data ||
				!refreshResponse.data.authToken
			) {
				return undefined;
			}

			return refreshResponse.data.authToken;
		} catch (e) {
			throw new Error('Failed to fetch fresh access token');
		}
	};

	const refreshTokenLink = getRefreshTokenLink({
		authorizationHeaderKey: 'Authorization',
		fetchNewAccessToken,
		getAccessToken: () => localStorage.getItem('token'),
		getRefreshToken: () => localStorage.getItem('refreshToken'),
		isAccessTokenValid: accessToken => isTokenValid(accessToken),
		isUnauthenticatedError: graphQLError => {
			const { extensions } = graphQLError;
			if (extensions && extensions.code && extensions.code === 'UNAUTHORIZED') {
				return true;
			}
			return false;
		},
	});

	return new ApolloClient({
		link: authLink.concat(httpLink, errorLink, refreshTokenLink),
		cache: new InMemoryCache(),
	});
}

export function initializeApollo(initialState = null) {
	const _apolloClient = apolloClient ?? createApolloClient();

	if (initialState) {
		_apolloClient.cache.restore(initialState);
	}
	if (typeof window === 'undefined') return _apolloClient;
	if (!apolloClient) apolloClient = _apolloClient;

	return _apolloClient;
}

export function useApollo(initialState) {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
}
