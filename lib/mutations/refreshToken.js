import { gql } from '@apollo/client';

export const REFRESH_TOKEN = gql`
	mutation RefreshAuthToken(
		$refreshJwtAuthToken: String!
		$clientMutationID: String
	) {
		refreshJwtAuthToken(
			input: {
				refreshJwtAuthToken: $refreshJwtAuthToken
				clientMutationId: $clientMutationID
			}
		) {
			authToken
		}
	}
`;
