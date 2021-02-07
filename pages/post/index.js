import Head from 'next/head';
import useSWR from 'swr';
import { fetcher } from 'util/fetcher';

import { AllPosts } from 'components/feed';
import { RecentPostsList } from 'components/list';
import Loading from 'components/loading';
import HeroPost from '../../components/HeroPost';

export default function Post() {
	const { data } = useSWR('/api/post/posts', fetcher);
	if (!data) return <Loading />;
	console.log(data);
	const heroPost = data.posts.edges[0]?.node;
	const morePosts = data.posts.edges.slice(1);

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
						key={heroPost.slug}
						title={heroPost.title}
						imgSrc={heroPost.featuredImage?.node.sourceUrl}
						imgSrcset={heroPost.featuredImage?.node.srcSet}
						excerpt={heroPost.excerpt}
						link={`/post/${heroPost.slug}`}
					/>
				</div>
				<div className='flex-auto w-full  col-span-5'>
					<AllPosts posts={morePosts} />
				</div>
				<div className='col-span-1 hidden md:block flex-auto w-full'>
					<RecentPostsList />
				</div>
			</main>
		</div>
	);
}
