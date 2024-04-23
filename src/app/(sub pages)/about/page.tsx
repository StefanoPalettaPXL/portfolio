import React from 'react';
import Image from 'next/image';
import bg from '../../../../public/background.png';

export default function About() {
	return (
		<>
			<Image
				src={bg}
				alt='background-image'
				className='w-full h-full object-cover object-center opacity-25'
				fill
			/>

			<h1 className='fixed top-10 w-full text-center text-4xl font-bold text-white'>
				About Me
			</h1>
		</>
	);
}
