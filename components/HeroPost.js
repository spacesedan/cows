import Image from 'next/image';
import Link from 'next/link';

export default function HeroPost({
	imgSrc,
	imgSrcset,
	ytID,
	title,
	excerpt,
	link,
}) {
	return (
		<section className='bg-white shadow-xl grid grid-cols-3'>
			<div className='h-106 overflow-hidden bg-gray-300 col-span-2'>
				{imgSrc && (
					<div className='relative w-full h-full'>
						<Image
							objectFit='cover'
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
			<div className='px-4 pt-4'>
				<h4 className=' text-3xl mb-5 font-semibold'>{title}</h4>
				{excerpt && (
					<div
						className=' text-xl mt-2 h-auto overflow-hidden'
						dangerouslySetInnerHTML={{ __html: excerpt }}
					/>
				)}

				{link && (
					<div className='flex items-center ml-3 pt-4'>
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
		</section>
	);
}
