// import { useState, useContext, createContext } from 'react';
// import { useApolloClient, useQuery } from '@apollo/client';
// import { useRouter } from 'next/router';

// import { SINGLE_VIDEO } from './queries/queries';

// const ContentContext = createContext({});

// export function ContentProvider({ children }) {
// 	const content = useProvideContent();
// 	return (
// 		<ContentContext.Provider value={content}>
// 			{children}
// 		</ContentContext.Provider>
// 	);
// }

// export const useContent = () => {
// 	return useContext(ContentContext);
// };

// function useProvideContent() {
// 	const client = useApolloClient();
// 	const router = useRouter();

// 	const [error, setError] = useState('');

// 	// actions
// 	const getSingleVideo = async (req, res) => {
// 		const {
// 			query: { slug },
// 		} = req;

// 		try {
// 			const { loading, error, data } = useQuery(SINGLE_VIDEO, {
// 				variables: { id: slug },
// 			});
// 		} catch (err) {
// 			console.log(err);
// 			setError('Invalid Request');
// 		}
// 	};
// }
