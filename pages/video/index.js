import Head from 'next/head';
import { AllVideos } from 'components/feed';
import { RecentVideosList } from 'components/list';

export default function Video() {
	return (
		<div>
			<Head>
				<title>Videos</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='flex'>
				<div className='flex-auto w-5/6'>
					<AllVideos />
				</div>
				<div className='hidden md:block flex-auto w-1/6 '>
					<RecentVideosList />
				</div>
			</main>
		</div>
	);
}
