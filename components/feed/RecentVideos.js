import { Feed } from '@/components/feed';
import Card from '@/components/card';
import { fetcher } from '@/util/fetcher';
import useSWR from 'swr';
import Loading from 'components/loading';

export const RecentVideosFeed = () => {
	const { data: recentVideos } = useSWR('/api/video/recent', fetcher);
	console.log(recentVideos);

	if (!recentVideos) return <Loading />;

	return (
		<Feed>
			<div className='col-span-full justify-self-start self-center'>
				<h3 className='text-2xl sm:text-4xl font-semibold '>Recent Videos</h3>
			</div>
			{recentVideos.videos.edges.map(({ node }) => (
				<Card
					key={node.slug}
					title={node.title}
					ytID={node.youtubeID}
					excerpt={node.excerpt}
					link={`/video/${node.slug}`}
				/>
			))}
		</Feed>
	);
};
