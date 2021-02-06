import Contact from 'components/contact';
import Head from 'next/head';

const Index = () => {
	return (
		<>
			<Head>
				<title>Contact Us</title>
				<link rel='icon' href='/favicon.ico' />
				<html lang='en' />
			</Head>
			<Contact />
		</>
	);
};

export default Index;
