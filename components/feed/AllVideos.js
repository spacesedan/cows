import { Feed } from 'components/feed';
import Card from 'components/card';
import { fetcher } from 'util/fetcher';
import useSWR from 'swr';
import Loading from 'components/loading';

export const AllVideos = () => {
	const { data: allVideos } = useSWR('/api/video/videos', fetcher);
	if (!allVideos) return <Loading />;

	return (
		<Feed cols={3}>
			<div className='col-span-full justify-self-start self-center'>
				<h3 className='text-2xl sm:text-4xl font-semibold '>Videos</h3>
			</div>
			{allVideos.videos.edges.map(({ node }) => (
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
