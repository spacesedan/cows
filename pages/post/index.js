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

			<main className='flex'>
				<div className='flex-auto w-5/6'>
					<AllPosts />
				</div>
				<div className='flex-auto w-1/6 '>
					<RecentPostsList />
				</div>
			</main>
		</div>
	);
}
