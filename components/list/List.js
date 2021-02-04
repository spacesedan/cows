export const List = ({ children }) => (
	<div className='flex justify-center'>
		<div className='shadow-xl rounded-lg w-1/2'>
			<ul className='divide-y divide-gray-300'>{children}</ul>
		</div>
	</div>
);
