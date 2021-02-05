import axios from 'axios';
export const sendContactMail = async (
	recipientMail,
	name,
	senderMail,
	content,
) => {
	const data = {
		recipientMail,
		name,
		senderMail,
		content,
	};

	try {
		const res = await axios({
			method: 'POST',
			url: '/api/contact',
			headers: {
				'Content-type': 'application/json',
			},
			data,
		});
		return res;
	} catch (err) {
		console.log('Error: ', err);
	}
};
