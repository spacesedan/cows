import Image from 'next/image';

const Hero = () => (
	<section
		className='col-span-full row-start-1 row-end-5 
  h-screen lg:h-85vh md:px-20 lg:px-24 px-2 bg-bottom bg-cover relative '>
		<Image src='/just-right.jpg' layout='fill' objectFit='cover' />

		<div className='flex flex-col justify-start items-center lg:items-start pt-12 sm:pt-40 '>
			<h2 className='text-5xl lg:text-7xl font-body font-bold w-full text-center lg:text-left z-10'>
				Utterly intoxicating.
			</h2>
			<p className=' mt-3 sm:mt-5 text-md sm:text-xl font-normal text-justify lg:text-left xl:text-xl h-auto w-4/5 sm:w-100 overflow-hidden z-10'>
				Nullam interdum dolor sed felis semper, et volutpat enim blandit. Donec
				laoreet, tellus et mattis tempor, metus ipsum egestas elit, ut bibendum
				metus nisi ut ante. Aenean elementum, tellus et ultrices hendrerit, est
				nunc cursus.
			</p>
			<a className='bg-blue-600 bg-opacity-70 pt-2 pb-3 px-4 mt-3 sm:pt-4 sm:pb-5 sm:px-6 sm:mt-10 rounded-full text-xl sm:text-2xl z-10 md:text-3xl font-bold text-white cursor-pointer'>
				Join Our Newsletter
			</a>
		</div>
	</section>
);

export default Hero;
