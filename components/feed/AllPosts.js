import { Feed } from 'components/feed';
import Card from 'components/card';
import { fetcher } from 'util/fetcher';
import useSWR from 'swr';
import Loading from '../loading';

export const AllPosts = () => {
	const { data: allPosts } = useSWR('/api/post/posts', fetcher);
	if (!allPosts) return <Loading />;

	return (
		<Feed cols={3}>
			<div className='col-span-full justify-self-start self-center'>
				<h3 className='text-2xl sm:text-4xl font-semibold '>Posts</h3>
			</div>
			{allPosts.posts.edges.map(({ node }) => (
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
