import useSWR from 'swr';

import { List } from 'components/list';
import ListLink from 'components/listlink/ListLink';
import { fetcher } from 'util/fetcher';

export const RecentVideosList = () => {
	const { data: recentVideos } = useSWR('api/video/recent', fetcher);
	if (!recentVideos) return 'loading...';

	return (
		<List>
			{recentVideos.videos.edges.map(({ node }) => (
				<ListLink
					key={node.slug}
					title={node.title}
					link={`/video/${node.slug}`}
				/>
			))}
		</List>
	);
};
