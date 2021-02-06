import { useEffect } from 'react';
import { useAuth } from 'lib/useAuth';
import Head from 'next/head';

export default function SignOut() {
	const { signOut } = useAuth();
	useEffect(() => {
		signOut();
	}, []);
	return (
		<div>
			<Head>
				<title>Sign Out</title>
				<link rel='icon' href='/favicon.ico' />
				<html lang='en' />
			</Head>
			<h2>Signed Out</h2>
		</div>
	);
}
