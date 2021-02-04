import Link from 'next/link';

const ListLink = ({ link, title }) => (
	<Link href={link}>
		<li className='p-4 hover:bg-gray-50 cursor-pointer'>{title}</li>
	</Link>
);

export default ListLink;
