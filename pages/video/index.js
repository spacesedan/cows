import Head from 'next/head';
import { AllVideos } from 'components/feed';

export default function Video() {
	return (
		<div>
			<Head>
				<title>posts</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='container mx-auto px-4'>
				<AllVideos />
			</main>
		</div>
	);
}
