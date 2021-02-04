import { ApolloProvider } from '@apollo/client';

import { useApollo } from 'lib/apollo';
import { AuthProvider } from 'lib/useAuth';

import Header from 'components/header';
import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
	const apolloClient = useApollo(pageProps.initialApolloState);

	return (
		<ApolloProvider client={apolloClient}>
			<AuthProvider>
				<Header />
				<Component {...pageProps} />
			</AuthProvider>
		</ApolloProvider>
	);
}

export default MyApp;
