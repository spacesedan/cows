import { Feed } from '@/components/feed';
import Card from '@/components/card';
import { fetcher } from '@/util/fetcher';
import useSWR from 'swr';
import Loading from 'components/loading';

export const RecentPostsFeed = () => {
	const { data: recentPosts } = useSWR('/api/post/recent', fetcher);
	if (!recentPosts) return <Loading />;

	return (
		<Feed cols={3}>
			<h3 className='col-span-full text-2xl sm:text-4xl font-semibold '>
				Recent Posts
			</h3>
			{recentPosts.posts.edges.map(({ node }) => (
				<Card
					key={node.slug}
					title={node.title}
					imgSrc={node.featuredImage?.node.sourceUrl}
					imgSrcset={node.featuredImage?.node.srcSet}
					excerpt={node.excerpt}
					link={`/post/${node.slug}`}
				/>
			))}
		</Feed>
	);
};
