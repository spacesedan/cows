import Image from 'next/image';

export const Loading = () => {
	return (
		<Image
			src='/loading.gif'
			height={100}
			width={100}
			alt='A cow doing a kickflip'
		/>
	);
};

export default Loading;
