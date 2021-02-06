export const Feedtwo = ({ children }) => {
	return (
		<section
			className={`grid grid-cols-1 md:grid-cols-2 gap-4 pt-20 pb-4 row-span-2 col-span-full px-4`}>
			{children}
		</section>
	);
};
