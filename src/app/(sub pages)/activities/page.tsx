"use client";
import Image from 'next/image';
import bg from '../../../../public/background.png';
import ActivityList from '@/components/activities/index';
import Sword from '@/components/models/Sword';
import { activityData } from '@/data';
import RenderModel from '@/components/RenderModel';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Activities() {
	const [showSword, setShowSword] = useState(false);
	const controls = useAnimation();

	useEffect(() => {
		controls.start({ opacity: 1 }).then(() => setShowSword(true)); // Start animation when the component mounts
	}, []);

	return (
		<>
			<Image
				src={bg}
				alt='background-image'
				className='w-full h-full object-cover object-center opacity-25'
				layout="fill"
			/>
			<div className="relative">
				<div className="absolute top-10 left-1/2 transform -translate-x-1/2">
					<h1 className="text-center text-4xl font-bold text-white">Activiteiten</h1>
				</div>

				<div className="flex mt-24">
					<motion.div
						className="md:w-1/4 hidden md:flex justify-start"
						initial={{ opacity: 0 }}
						animate={controls}
					>
						{showSword && (
							<RenderModel>
								<Sword />
							</RenderModel>
						)}
					</motion.div>
					<div className="md:w-3/4 w-full md:h-full">
						<ActivityList activities={activityData} />
					</div>
				</div>
			</div>
		</>
	);
}
