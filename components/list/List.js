export const List = ({ type, children }) => (
	<div className='flex justify-center pt-30 '>
		<div className='shadow-md w-5/6 '>
			<h4 className='text-xl text-center p-4 font-semibold'>{type}</h4>
			<ul className='divide-y divide-blue-300'>{children}</ul>
		</div>
	</div>
);
