'use client';

import { BtnList } from '@/data';
import React from 'react';
import NavButton from './NavButton';
import useScreenSize from '../hooks/useScreenSize';
import ResponsiveComponent from '../ResponsiveComponent';
import { motion } from 'framer-motion';

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.05
		}
	}
};

const Navigation = () => {
	const angleIncrement = 360 / BtnList.length;
	const size = useScreenSize();

	const isLarge = size >= 1024;
	const isMedium = size >= 768 && size < 1024;

	return (
		<div className='w-full fixed h-screen flex items-center justify-center'>
			<ResponsiveComponent>
				{({ size }) => (
					size && size >= 480 ? (
						<motion.div
							variants={container}
							initial='hidden'
							animate='show'
							className='w-max flex items-center justify-center relative hover:pause animate-spin-slow group'>
							{BtnList.map((btn, index) => {
								const angleRad = (angleIncrement * index * Math.PI) / 180;
								const radius = isLarge ? 'calc(21vw - 1rem)' : isMedium ? 'calc(30vw - 1rem)' : 'calc(40vw - 1rem)';

								const x = `calc(${radius}*${Math.cos(angleRad)})`;
								const y = `calc(${radius}*${Math.sin(angleRad)})`;

								return <NavButton key={btn.label} x={x} y={y} {...btn} />;
							})}
						</motion.div>
					) :
						<>
							<motion.div
								variants={container}
								initial='hidden'
								animate='show'
								className='w-full px-2.5 xs:p-0 space-y-4 xs:w-max flex flex-col item-start xs:items-center
									justify-center relative group'>
								{BtnList.slice(0, BtnList.length / 2).map((btn, index) => {
									return <NavButton key={btn.label} x={'0'} y={'0'} {...btn} />;
								})}
							</motion.div>

							<motion.div
								variants={container}
								initial='hidden'
								animate='show'
								className='w-full px-2.5 xs:p-0 space-y-4 xs:w-max flex flex-col items-end xs:items-center
									justify-center relative group'>
								{BtnList.slice(BtnList.length / 2, BtnList.length).map((btn, index) => {
									return <NavButton key={btn.label} labelDirection='left' x={'0'} y={'0'} {...btn} />;
								})}
							</motion.div>
						</>
				)}
			</ResponsiveComponent>
		</div>
	);
};

export default Navigation;
