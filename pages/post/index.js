import Head from 'next/head';

import { AllPosts } from 'components/feed';
import { RecentPostsList } from 'components/list';

export default function Post() {
	return (
		<div>
			<Head>
				<title>posts</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='grid grid-rows-8 grid-cols-1 md:grid-cols-6 gap-4 overflow-hidden auto-rows-max md:auto-rows-min w-full'>
				<div className='flex-initial'>
					<AllPosts />
				</div>
				<div className='flex-none w-1/3 '>
					<RecentPostsList />
				</div>
			</main>
		</div>
	);
}
