import { Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const HomeButton = () => {
	return (
		<div className='absolute cursor-pointer z-50'>
			<Link
				href={'/'}
				target={'_self'}
				className='text-foreground rounded-full flex items-center justift-center custom-bg
						fixed top-4 left-4 hover:text-accent'
				aria-label={'home'}>
				<span className='rrelative w-14 h-14 p-4 hover:text-accent'>
					<Home className='w-full h-auto' strokeWidth={1.5} />

					<span className='peer bg-transparent absolute top-0 left-0 w-full h-full' />

					<span
						className='absolute font-bold hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2
						-translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap'>
						Go to Home Page
					</span>
				</span>
			</Link>
		</div>
	);
};

export default HomeButton;
