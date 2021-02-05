import useSWR from 'swr';

import { List } from 'components/list';
import ListLink from 'components/listlink/ListLink';
import Loading from 'components/loading';
import { fetcher } from 'util/fetcher';

export const RecentPostsList = () => {
	const { data: recentPosts } = useSWR('api/post/recent', fetcher);
	if (!recentPosts) return <Loading />;

	return (
		<List type='Recent Posts'>
			{recentPosts.posts.edges.map(({ node }) => (
				<ListLink
					key={node.slug}
					title={node.title}
					link={`/post/${node.slug}`}
				/>
			))}
		</List>
	);
};
