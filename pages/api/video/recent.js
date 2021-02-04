const endpoint = process.env.WORDPRESS_LOCAL_API_URL;

export default async (req, res) => {
	const QUERY_RECENT_VIDEOS = `
    query RecentVideos {
      videos(first: 5, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            slug
            title
            youtubeID
            excerpt
           
      }
    }
  }
}
      
  `;

	const data = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: QUERY_RECENT_VIDEOS,
		}),
	});

	const json = await data.json();

	res.json(json.data);
};
