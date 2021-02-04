import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { useAuth } from 'lib/useAuth';

export default function Header() {
	const { user } = useAuth();
	const [toggle, setToggle] = useState(false);

	const onClick = () => {
		setToggle(prev => !prev);
	};

	const MouseOut = () => {
		setToggle(prev => !prev);
	};

	const authlinks = [
		!user && { label: 'Sign In', href: '/auth/signin' },
		user && { label: 'Sign Out', href: '/auth/signout' },
	]
		.filter(link => link)
		.map(({ label, href }) => {
			return (
				<Link href={href} key={href}>
					<a
						className={`lg-mr-12 py-2 px-4 text-2xl lg:text-md cursor-pointer`}>
						{label}
					</a>
				</Link>
			);
		});

	const register = [!user && { label: 'Register', href: '/auth/register' }]
		.filter(link => link)
		.map(({ label, href }) => {
			return (
				<Link href={href} key={href}>
					<div className='flex items-center justify-center mt-2 lg:mt-0 text-2xl lg:text-md pb-4 lg:pb-0'>
						<a className='bg-blue-600 relative pt-2 pb-3 px-4 rounded-full text-white z-10 cursor-pointer'>
							{label}
						</a>
						<h4
							className='bg-blue-600 absolute py-2 px-4 rounded-full  '
							style={{
								filter: 'blur(20px)',
							}}>
							{label}
						</h4>
					</div>
				</Link>
			);
		});

	const links = [
		{ label: 'Blog', href: '/post' },
		{ label: 'Video', href: '/video' },
	]
		.filter(link => link)
		.map(({ label, href }) => {
			return (
				<Link href={href} key={href}>
					<a className='py-2 px-4 text-2xl lg:text-md cursor-pointer'>
						{label}
					</a>
				</Link>
			);
		});

	return (
		<motion.nav
			transition={{ delay: 3 }}
			className={`flex flex-wrap  transition-height delay-300 ease-out fixed w-full bg-gradient-to-br from-white-1 to-white-2 z-10  lg:px-24 px-20 py-4`}
			style={{
				backdropFilter: 'blur(20px)',
			}}>
			<div className='  justify-self-center self-center flex-1'>
				<Link href={'/'}>
					<a className='text-2xl md:text-4xl font-bold'>Cows!</a>
				</Link>
			</div>
			<div
				onClick={onClick}
				className=' lg:hidden h-auto w-8 md:w-10   self-center justify-self-center'>
				<svg
					className='fill-current hover:text-blue-600 transition duration-300 ease-in '
					id='Layer_1'
					data-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 254 132'>
					<rect className='cls-1' width='254' height='26' rx='13' />
					<rect className='cls-1' y='106' width='254' height='26' rx='13' />
					<path
						className='cls-1'
						d='M319.74,183H122.26C116,183,111,177.18,111,170h0c0-7.18,5-13,11.26-13H319.74C326,157,331,162.82,331,170h0C331,177.18,326,183,319.74,183Z'
						transform='translate(-94 -104)'
					/>
				</svg>
			</div>
			<div
				className={`${
					toggle ? 'block' : 'hidden'
				} lg:flex lg:items-center lg:justify-end lg:w-auto w-full transition-all ease-in duration-700 `}>
				<div
					onMouseLeave={MouseOut}
					className={` opacity-${
						toggle ? '100' : '0'
					} flex flex-col items-center w-full lg:flex-row lg:items-center lg:justify-end lg:w-auto`}>
					{links}
					{authlinks}
					{register}
				</div>
			</div>
		</motion.nav>
	);
}
