import Link from 'next/link';
import Image from 'next/image';

const Card = ({ imgSrc, imgSrcset, ytID, title, excerpt, link }) => (
	<>
		<article className='bg-white shadow-xl row-span-1 col-span-1'>
			<div className='h-80 overflow-hidden bg-gray-300'>
				{imgSrc && (
					<div className='relative w-full h-full'>
						<Image
							className='object-cover'
							src={imgSrc}
							srcSet={imgSrcset}
							layout='fill'
							loading='lazy'
							alt={title}
						/>
					</div>
				)}
				{ytID && (
					<iframe
						className='object-cover w-full h-full'
						title={title}
						width='560'
						height='315'
						src={`https://www.youtube.com/embed/${ytID}`}
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						alt={title}
					/>
				)}
			</div>
			<div className='px-4'>
				<h4 className='mt-5 text-2xl font-semibold'>{title}</h4>
				{excerpt && (
					<div
						className=' mt-5 text-xl h-60 overflow-hidden'
						dangerouslySetInnerHTML={{ __html: excerpt }}
					/>
				)}
				{link && (
					<div className='flex items-center ml-3 pt-4 mb-4'>
						<Link href={link}>
							<a className='group font-mono text-lg shadow-underline text-gray-500 relative '>
								<span className='z-10 relative'>Read More</span>
								<span
									className='absolute w-20 h-2 bg-blue-200
                 left-1/4 -ml-7 z-0 bottom-0.5 group-hover:h-5 transition-height'></span>
							</a>
						</Link>
					</div>
				)}
			</div>
		</article>
	</>
);

export default Card;
