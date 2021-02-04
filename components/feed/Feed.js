export const Feed = ({ children, cols = 3 }) => {
	return (
		<section
			className={`grid grid-cols-1 lg:grid-cols-${cols} gap-4 pt-20 pb-4 row-span-2 col-span-full px-4`}>
			{children}
		</section>
	);
};
