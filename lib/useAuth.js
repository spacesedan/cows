import { useState, useContext, createContext } from 'react';
import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { v4 } from 'uuid';

import { REFRESH_TOKEN, SIGN_IN, SIGN_UP } from 'lib/mutations/mutations';
import { VIEWER } from './queries.js/viewer';
import { setLocal, removeLocal, getLocal } from '@/util/setLocal';
import { setAccessToken } from './accessToken';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
	const auth = useProvideAuth();
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
	return useContext(AuthContext);
};

function useProvideAuth() {
	const client = useApolloClient();
	const router = useRouter();

	const [error, setError] = useState('');
	const { data: viewer } = useQuery(VIEWER);

	const user = viewer && viewer.viewer;

	//Signing In and Registering
	const [signInMutation] = useMutation(SIGN_IN);
	const [registerMutation] = useMutation(SIGN_UP);
	const [refreshTokenMutation] = useMutation(REFRESH_TOKEN);

	const signIn = async (username, password) => {
		try {
			const { data } = await signInMutation({
				variables: { username, password, clientMutationId: v4() },
			});

			if (data.login.authToken && data.login.user) {
				console.log(data);
				setAccessToken(data.login.authToken);
				setLocal('token', data.login.authToken);
				setLocal('refreshToken', data.login.refreshToken);
				client.resetStore().then(() => {
					router.push('/');
				});
				// console.log(data);
			} else {
				console.log(error);
				setError('Invalid Login');
			}
		} catch (err) {
			console.log('Error: ', err);
			setError(err.message);
		}
	};

	const signUp = async (username, email, password) => {
		try {
			const { data } = await registerMutation({
				variables: {
					username,
					email,
					password,
					clientMutationId: v4(),
				},
			});
			if (data.registerUser.jwtAuthToken && data.registerUser.user) {
				setLocal('token', data.registerUser.jwtAuthToken);
				setLocal('refreshToken', data.registerUser.jwtRefreshToken);
				client.resetStore().then(() => {
					router.push('/');
				});
			}
		} catch (err) {
			console.log('Error: ', error);
			setError(err.message);
		}
	};

	const signOut = () => {
		removeLocal('token');
		removeLocal('refreshToken');
		removeLocal('id');
		client.resetStore().then(() => {
			router.push('/');
		});
	};

	return {
		user,
		error,
		signIn,
		signUp,
		signOut,
	};
}
