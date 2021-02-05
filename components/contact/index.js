import { useState } from 'react';
import { sendContactMail } from 'components/contact/mail-api';

export default function Contact() {
	const [state, setState] = useState({
		formButtonDisabled: false,
		formButtonText: 'Send',
		name: '',
		email: '',
		formContent: '',
	});

	const {
		formButtonDisabled,
		formButtonText,
		name,
		email,
		formContent,
	} = state;

	const handleChange = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();

		const recipientEmail = 'wpheadless@gmail.com';
		const res = await sendContactMail(recipientEmail, name, email, formContent);
		console.log(res);
		if (res.status < 300) {
			setState({
				...state,
				formButtonDisabled: true,
				formButtonText: 'Thanks for your message',
			});
		} else {
			setState({
				...state,
				formButtonText: 'Please fill out all fields.',
			});
		}
	};

	return (
		<>
			<div className='pt-30'>
				<div>
					<input
						className='bg-blue-600'
						type='text'
						value={name}
						name='name'
						onChange={handleChange}
						placeholder='Name'
					/>
				</div>
				<div>
					<input
						className='bg-blue-600'
						type='email'
						value={email}
						name='email'
						onChange={e =>
							setState({ ...state, [e.target.name]: e.target.value })
						}
						placeholder='Email'
					/>
				</div>
				<div>
					<input
						className='bg-blue-600'
						type='text'
						value={formContent}
						name='formContent'
						onChange={e =>
							setState({ ...state, [e.target.name]: e.target.value })
						}
						placeholder='Message'
					/>
				</div>
				<div>
					<button
						className='text-black bg-blue-600'
						type='submit'
						onClick={handleSubmit}
						disabled={formButtonDisabled}>
						{formButtonText}
					</button>
				</div>
			</div>
		</>
	);
}
