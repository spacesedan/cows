import { useState } from 'react';
import { sendContactMail } from 'components/contact/mail-api';
import Image from 'next/image';

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
				name: '',
				email: '',
				formContent: '',
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
		<div className='flex items-center justify-center h-screen w-screen relative'>
			<Image src='/cow-bg.svg' layout='fill' objectFit='cover' />
			<form className='pt-30 grid grid-cols-2 grid-rows-4 gap-2 w-3/4 z-10'>
				<h2 className='col-span-full text-red-600 text-4xl font-semibold w-full text'>
					Contact Us
				</h2>
				<div className='bg-blue-600 p-2 w-full justify-self-center '>
					<input
						type='text'
						value={name}
						name='name'
						onChange={handleChange}
						placeholder='Name'
					/>
				</div>
				<div className='bg-blue-600 p-2'>
					<input
						type='email'
						value={email}
						name='email'
						onChange={e =>
							setState({ ...state, [e.target.name]: e.target.value })
						}
						placeholder='Email'
					/>
				</div>
				<div className='bg-blue-600 row-span-2 p-2 col-span-full'>
					<textarea
						className='w-full'
						rows={3}
						value={formContent}
						name='formContent'
						onChange={e =>
							setState({ ...state, [e.target.name]: e.target.value })
						}
						placeholder='Message'
					/>
				</div>
				<div className='bg-blue-600 p-2 col-span-full justify-self-center w-2/5'>
					<button
						className='text-black bg-blue-600 w-full'
						type='submit'
						onClick={handleSubmit}
						disabled={formButtonDisabled}>
						{formButtonText}
					</button>
				</div>
			</form>
		</div>
	);
}
