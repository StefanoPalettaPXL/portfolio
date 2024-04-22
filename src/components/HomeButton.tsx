import { Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const HomeButton = () => {
	return (
		<div className='absolute cursor-pointer z-50'>
			<Link
				href={'/'}
				target={'_self'}
				className='fixed w-20 text-foreground rounded-full flex items-center justift-center
                bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] right-10
                shadow-glass-inset hover:shadow-glass-sm top-4 left-4'
				aria-label={'home'}>
				<span className='relative w-20 h-20 p-4 hover:text-accent'>
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
