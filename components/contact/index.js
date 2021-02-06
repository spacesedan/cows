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

	const onClick = async e => {
		e.preventDefault();

		const recipientEmail = 'wpheadless@gmail.com';
		const res = await sendContactMail(
			recipientEmail,
			name,
			email,
			formContent,
		).then(
			setState({
				name: '',
				email: '',
				formContent: '',
				formButtonDisabled: true,
				formButtonText: 'Thanks!',
			}),
		);
	};

	return (
		<div className='flex items-center justify-center h-screen w-screen relative'>
			<Image
				src='/cow-bg.svg'
				layout='fill'
				objectFit='cover'
				alt='A background with a cow'
			/>
			<div
				className='bg-gradient-to-br rounded-md from-white-1 to-white-2 z-30 border-white border-2 b flex items-center justify-center p-4 w-2/3'
				style={{
					backdropFilter: 'blur(20px)',
				}}>
				<form className='grid grid-cols-2 grid-rows-5 gap-2 w-5/6 md:w-3/4 z-10 '>
					<h2 className='col-span-full  text-4xl font-semibold w-full text-center'>
						Contact Us
					</h2>
					<div className='col-span-full md:col-span-1 p-2 w-full justify-self-center '>
						<input
							className='w-full text-2xl p-1 border-black border-2 focus:border-blue-600 rounded-md'
							type='text'
							value={name}
							name='name'
							onChange={handleChange}
							placeholder='Name'
						/>
					</div>
					<div className='col-span-full md:col-span-1 p-2 w-full justify-self-center  '>
						<input
							className='w-full text-2xl p-1 border-black border-2 rounded-md'
							type='email'
							value={email}
							name='email'
							onChange={e =>
								setState({ ...state, [e.target.name]: e.target.value })
							}
							placeholder='Email'
						/>
					</div>
					<div className=' row-span-2 p-2 col-span-full'>
						<textarea
							className='w-full text-2xl resize-none p-1 border-black border-2 rounded-md'
							rows={3}
							value={formContent}
							name='formContent'
							onChange={e =>
								setState({ ...state, [e.target.name]: e.target.value })
							}
							placeholder='Message'
						/>
					</div>
					<div className='flex items-center justify-center mt-2 lg:mt-0 text-2xl lg:text-md pb-4 lg:pb-0 col-span-full w-full'>
						<button
							type='submit'
							onClick={onClick}
							disabled={formButtonDisabled}
							className='bg-blue-600 relative pt-2 pb-3 px-4 rounded-full text-white z-10 cursor-pointer w-2/3'>
							{formButtonText}
						</button>
						<button
							className='bg-blue-600 absolute py-2 pb-3 px-4 rounded-full  w-1/3'
							style={{
								filter: 'blur(20px)',
							}}>
							{formButtonText}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
