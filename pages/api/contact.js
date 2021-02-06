import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	},
});

export default async (req, res) => {
	const { senderMail, name, content, recipientMail } = req.body;

	if (
		senderMail === '' ||
		name === '' ||
		content === '' ||
		recipientMail === ''
	) {
		res.status(403).send('');
		return;
	}

	const mailerRes = await mailer({
		senderMail,
		name,
		text: content,
		recipientMail,
	});

	res.send(mailerRes);
};

const mailer = ({ senderMail, name, text, recipientMail }) => {
	const from =
		name && senderMail ? `${name} < ${senderMail} >` : `${name || senderMail}`;
	const message = {
		from,
		to: `${recipientMail}`,
		subject: `New message from ${from}`,
		text,
		replyTo: from,
	};

	return new Promise((resolve, rej) => {
		transporter.sendMail(message, (error, reject) =>
			error ? rej(error) : resolve(info),
		);
	});
};
