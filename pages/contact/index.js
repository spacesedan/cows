const ContactForm = () => (
	<div className='pt-40'>
		<form name='contact' method='post' data-netlify='true'>
			<input type='hidden' name='form-name' value='contact' />
			<div>
				<label htmlFor='name'>Name</label>
				<input
					className='bg-blue-600'
					type='text'
					id='name'
					name='name'></input>
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input
					className='bg-blue-600'
					type='text'
					id='email'
					name='email'></input>
			</div>
			<div>
				<label htmlFor='message'>Message</label>
				<input
					className='bg-blue-600'
					type='text'
					id='message'
					name='message'></input>
			</div>
			<div>
				<button className='bg-blue-600' type='submit'>
					send
				</button>
			</div>
		</form>
	</div>
);

export default ContactForm;
