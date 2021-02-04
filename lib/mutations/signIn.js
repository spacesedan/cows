import { gql } from '@apollo/client';

export const SIGN_IN = gql`
	mutation LoginUser(
		$username: String!
		$password: String!
		$clientMutationId: String!
	) {
		login(
			input: {
				username: $username
				password: $password
				clientMutationId: $clientMutationId
			}
		) {
			user {
				id
			}
			authToken
			clientMutationId
			refreshToken
		}
	}
`;
