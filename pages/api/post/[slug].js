const endpoint = process.env.WORDPRESS_LOCAL_API_URL;

export default async (req, res) => {
	const {
		query: { slug },
	} = req;

	const QUERY_SINGLE_POST = `
    query SinglePost($id: ID!) {
      post(id: $id, idType: SLUG) {
        title
        content
      }
    }
  `;

	const data = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: QUERY_SINGLE_POST,
			variables: {
				id: slug,
			},
		}),
	});

	const json = await data.json();

	res.json(json.data);
};
