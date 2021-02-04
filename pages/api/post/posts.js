const endpoint = process.env.WORDPRESS_LOCAL_API_URL;

export default async (req, res) => {
	const QUERY_ALL_POSTS = `
		query RecentPosts {
			posts(where: { orderby: { field: DATE, order: DESC } }) {
				edges {
					node {
						slug
						title
						excerpt
						featuredImage {
							node {
								srcSet
								sourceUrl(size: POST_THUMBNAIL)
							}
						}
					}
				}
			}
		}
	`;

	const data = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: QUERY_ALL_POSTS,
		}),
	});

	const json = await data.json();

	res.json(json.data);
};
