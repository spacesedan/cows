const { title } = require('process');

const Page = ({ title, content }) => (
	<main className='flex flex-col pt-20 p-10 '>
		<h1 className='block text-3xl font-semibold w-full'>{title}</h1>
		<div
			className='flex flex-col pt-5 items-center'
			dangerouslySetInnerHTML={{ __html: ` ${content} ` }}
		/>
	</main>
);

export default Page;
