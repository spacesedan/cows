import Image from 'next/image';
import { useState } from 'react';

export default function ContactPage() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const onSubmit = async e => {
		e.prevenDefault();

		const contact = {
			name,
			email,
			message,
		};

		await fetch('http://localhost:3000/api/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(contact),
		});
	};

	return (
		<main className='w-screen h-screen relative pt-20'>
			{/* <Image src='/cow-bg.svg' layout='fill' objectFit='cover' /> */}
			<div className='z-10'>
				<form onSubmit={onSubmit}>
					<input
						name='Name'
						value={name}
						onChange={e => setName(e.target.value)}
						placeholder='Name'
					/>
					<input
						name='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder='Email'
					/>
					<input
						name='message'
						value={message}
						onChange={e => setMessage(e.target.value)}
						placeholder='Message'
					/>
					<button type='submit'>Send</button>
				</form>
			</div>
		</main>
	);
}
