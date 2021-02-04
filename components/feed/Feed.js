import { Children } from 'react';

export const Feed = ({ children }) => {
	return (
		<section className='grid grid-cols-1 sm:mt-20 lg:grid-cols-3 gap-4 py-4 row-span-2 col-span-full mmd:px-20 lg:px-24 px-4'>
			{children}
		</section>
	);
};
