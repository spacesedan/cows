import { ApolloProvider } from '@apollo/client';
import { AnimateSharedLayout } from 'framer-motion';

import { useApollo } from 'lib/apollo';
import { AuthProvider } from 'lib/useAuth';

import Header from 'components/header';
import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
	const apolloClient = useApollo(pageProps.initialApolloState);

	return (
		<ApolloProvider client={apolloClient}>
			<AuthProvider>
				<AnimateSharedLayout>
					<Header />
					<Component {...pageProps} />
				</AnimateSharedLayout>
			</AuthProvider>
		</ApolloProvider>
	);
}

export default MyApp;
