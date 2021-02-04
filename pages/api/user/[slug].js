const endpoint = process.env.WORDPRESS_LOCAL_API_URL;
export default async (req, res) => {
	const {
		query: { slug },
	} = req;

	const CURRENT_USER = `
  query CurrentUser() {
    viewer{
      id
      slug
      username
    }
  }
  `;

	const data = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: CURRENT_USER,
		}),
	});

	const json = await data.json();

	res.json(json.data);
};
