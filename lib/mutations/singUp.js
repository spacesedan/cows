import { gql } from '@apollo/client';

export const SIGN_UP = gql`
	mutation RegisterUser(
		$username: String!
		$email: String!
		$password: String!
		$clientMutationId: String!
	) {
		registerUser(
			input: {
				username: $username
				email: $email
				password: $password
				clientMutationId: $clientMutationId
			}
		) {
			user {
				id
				jwtAuthToken
				jwtRefreshToken
			}
		}
	}
`;
