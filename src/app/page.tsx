"use client";
import Image from 'next/image';
import bg from '../../public/background.png';
import RenderModel from '@/components/RenderModel';
import Jake from '@/components/models/Jake';
import Navigation from '@/components/navigation/Index';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
	const [showJake, setShowJake] = useState(false);
	const controls = useAnimation();

	useEffect(() => {
		controls.start({ opacity: 1 }).then(() => setShowJake(true)); // Start animation when the component mounts
	}, []);

	return (
		<main className='flex min-h-screen flex-col items-center justify-between relative'>
			<Image
				src={bg}
				alt='background-image'
				className='w-full h-full object-cover object-center opacity-25'
				fill
			/>

			<div className='fixed top-12 text-center md:text-left md:left-16'>
				<p className='font-serif font-bold italic text-orange-100 text-7xl'>Stefano Paletta</p>
				<p className='mt-4 italic font-light text-orange-400 opacity-40 font-rubik text-3xl'>Software Developer</p>
			</div>

			<div className='w-full h-screen'>
				<Navigation />
				<motion.div
					initial={{ opacity: 0 }}
					animate={controls}
					className="w-full h-full"
				>
					{showJake && (
						<RenderModel>
							<Jake />
						</RenderModel>
					)}
				</motion.div>
			</div>

			<div className='fixed bottom-28 text-center xl:hidden sm:bottom-10'>
				<p className='text-orange-100 lowercase italic font-serif opacity-50 select-none'>Designed for desktop experience</p>
			</div>
		</main>
	);
}
