import Head from 'next/head';
import { RecentPostsFeed, RecentVideosFeed } from '@/components/feed';
import Hero from '@/components/hero.js';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Headless Next</title>
				<link rel='icon' href='/favicon.ico' />
				<html lang='en' />
			</Head>

			<main className='grid grid-rows-8 grid-cols-1 md:grid-cols-6 gap-4 overflow-hidden auto-rows-max md:auto-rows-min w-full'>
				<Hero />
				<RecentVideosFeed />
				<RecentPostsFeed />
			</main>
		</div>
	);
}
