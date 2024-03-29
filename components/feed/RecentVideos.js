import { Feed } from '@/components/feed';
import Card from '@/components/card';
import { fetcher } from '@/util/fetcher';
import useSWR from 'swr';
import Loading from 'components/loading';

export const RecentVideosFeed = () => {
	const { data } = useSWR('/api/video/recent', fetcher);
	console.log(data);

	if (!data) return <Loading />;

	return (
		<Feed cols={3}>
			<h3 className=' col-span-full text-2xl sm:text-4xl font-semibold '>
				Recent Videos
			</h3>

			{data.videos.edges.map(({ node }) => (
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
