import { Feedtwo } from 'components/feed';
import Card from 'components/card';

export const AllPosts = ({ posts }) => {
	return (
		<Feedtwo cols={2}>
			<div className='col-span-full justify-self-start self-center'>
				<h3 className='text-2xl sm:text-4xl font-semibold '>More Posts</h3>
			</div>

			{posts.map(({ node }) => (
				<Card
					key={node.slug}
					title={node.title}
					imgSrc={node.featuredImage?.node.sourceUrl}
					imgSrcset={node.featuredImage?.node.srcSet}
					excerpt={node.excerpt}
					link={`/post/${node.slug}`}
				/>
			))}
		</Feedtwo>
	);
};
