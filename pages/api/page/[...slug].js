const endpoint = process.env.WORDPRESS_LOCAL_API_URL;

export default async (req, res) => {
	const {
		query: { slug },
	} = req;

	console.log(slug);
	const uri = slug.join('/');

	const QUERY_SINGLE_PAGE = `
    query SinglePage($id: ID!) {
      page(id: $id, idType: URI) {
        title
        content
      }
    }
  `;

	const data = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: QUERY_SINGLE_PAGE,
			variables: {
				id: uri,
			},
		}),
	});

	const json = await data.json();

	res.json(json.data);
};
