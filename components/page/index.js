const { title } = require('process');

const Page = ({ title, content }) => (
	<main className='flex flex-col pt-20 p-10 items-center '>
		<h1 className='block text-5xl font-semibold w-2/3'>{title}</h1>
		<div
			className='flex flex-col pt-5 w-2/3 items-center'
			dangerouslySetInnerHTML={{ __html: ` ${content} ` }}
		/>
	</main>
);

export default Page;
