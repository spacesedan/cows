import { gql } from '@apollo/client';

export const VIEWER = gql`
	query CurrentUser {
		viewer {
			id
			slug
			username
		}
	}
`;
