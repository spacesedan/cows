export default function RD() {
	return (
		<main className='grid grid-cols-6 grid-rows-4 gap-4 pt-20 px-24'>
			<section className='grid grid-cols-1 sm:mt-20 lg:grid-cols-3 grid-rows-layout gap-4 py-4 row-span-4 col-span-full h-85vh mmd:px-20 lg:px-24 px-4'>
				<div className='col-span-full justify-self-start self-center'>
					<h3 className='text-2xl sm:text-4xl font-semibold '>Recent Posts</h3>
				</div>
				<article className='bg-white shadow-xl row-span-1 h-106'>
					<div className='w-full h-60 bg-cow bg-cover bg-left-top' />
					<div className='px-4'>
						<h4 className='mt-5 text-2xl font-semibold'>Lorem Ipsum</h4>
						<p className=' mt-5 text-md h-36 overflow-hidden'>
							Cursus vitae congue mauris rhoncus. Neque laoreet suspendisse
							interdum consectetur libero id. In hac habitasse platea dictumst
							quisque sagittis purus sit amet. Consequat nisl vel pretium lectus
							quam. Sem nulla pharetra diam sit.
						</p>
						<div className='flex items-center ml-3 pt-4 mb-4'>
							<a className='group font-mono text-xs shadow-underline text-gray-500 relative '>
								<span className='z-10 relative'>Read More</span>
								<span
									className='absolute w-14 h-1 bg-blue-200
                 left-1/2 -ml-7 z-0 bottom-0.5 group-hover:h-3 transition-height'></span>
							</a>
						</div>
					</div>
				</article>
			</section>
			<div className='bg-yellow-400 col-start-6 col-end-7 row-span-2'>2</div>
			<div className='bg-red-400 col-start-6 col-end-7 row-span-2'>3</div>
		</main>
	);
}
