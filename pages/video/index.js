import Head from 'next/head';
import useSWR from 'swr';
import { fetcher } from 'util/fetcher';

import { AllVideos } from 'components/feed';
import { RecentVideosList } from 'components/list';
import Loading from 'components/Loading';
import HeroPost from '../../components/HeroPost';

export default function Post() {
	const { data } = useSWR('/api/video/videos', fetcher);
	if (!data) return <Loading />;
	console.log(data);
	const heroVideo = data.videos.edges[0]?.node;
	const moreVideos = data.videos.edges.slice(1);

	return (
		<div className='bg-gray-100'>
			<Head>
				<title>Blog</title>
				<link rel='icon' href='/favicon.ico' />
				<html lang='en' />
			</Head>

			<main className='grid grid-cols-6 '>
				<div className='pt-20 col-span-full px-4'>
					<HeroPost
						key={heroVideo.slug}
						title={heroVideo.title}
						ytID={heroVideo.youtubeID}
						excerpt={heroVideo.excerpt}
						link={`/video/${heroVideo.slug}`}
					/>
				</div>
				<div className='flex-auto w-full  col-span-5'>
					<AllVideos videos={moreVideos} />
				</div>
				<div className='col-span-1 hidden md:block flex-auto w-full'>
					<RecentVideosList />
				</div>
			</main>
		</div>
	);
}
