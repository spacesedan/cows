import Loading from '@/components/loading';
import Head from 'next/head';
import useSWR from 'swr';
const endpoint = process.env.WORDPRESS_LOCAL_API_URL;

import Page from 'components/page';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Post({ slug }) {
	const { data, error } = useSWR(`/api/video/${slug}`, fetcher);
	console.log(data);
	if (error) return <div>error...</div>;
	if (!data)
		return (
			<div>
				<Loading />
			</div>
		);

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
				<link
					rel='stylesheet'
					href='http://headless-next.local/wp-includes/css/dist/block-library/style.min.css?ver=5.6'></link>
			</Head>

			<Page title={data.video.title} content={data.video.content} />
		</div>
	);
}

export async function getStaticProps({ params }) {
	return {
		props: {
			slug: params.slug,
		},
	};
}

export async function getStaticPaths() {
	const QUERY_ALL_VIDEOS = `
    query AllVideos {
      videos {
        edges {
          node {
            slug
          }
        }
      }
    }
  `;

	const allPosts = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: QUERY_ALL_VIDEOS,
		}),
	});

	const {
		data: {
			videos: { edges },
		},
	} = await allPosts.json();

	return {
		paths: edges.map(({ node }) => `/video/${node.slug}`) || [],
		fallback: true,
	};
}
