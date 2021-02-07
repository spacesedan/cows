import { Feedtwo } from 'components/feed';
import Card from 'components/card';

export const AllVideos = ({ videos }) => {
	return (
		<Feedtwo>
			<div className='col-span-full justify-self-start self-center'>
				<h3 className='text-2xl sm:text-4xl font-semibold '>Videos</h3>
			</div>
			{videos.map(({ node }) => (
				<Card
					key={node.slug}
					title={node.title}
					ytID={node.youtubeID}
					excerpt={node.excerpt}
					link={`/video/${node.slug}`}
				/>
			))}
		</Feedtwo>
	);
};
