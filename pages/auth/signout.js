import { useEffect } from 'react';
import { useAuth } from 'lib/useAuth';

export default function SignOut() {
	const { signOut } = useAuth();
	useEffect(() => {
		signOut();
	}, []);
	return (
		<div>
			<Head>
				<title>Headless Next</title>
				<link rel='icon' href='/favicon.ico' />
				<html lang='en' />
			</Head>
			<h2>Signed Out</h2>
		</div>
	);
}
