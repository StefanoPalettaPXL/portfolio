import Link from 'next/link';
import React from 'react';

// Icons
import { Github, Home, Linkedin, Phone, ScrollText, UserRound } from 'lucide-react';

interface NavButtonProps {
	x: string;
	y: string;
	label: string;
	link: string;
	icon: string;
	newTab: boolean;
}

const getIcon = (icon: string) => {
	switch (icon) {
		case 'home':
			return <Home className='w-full h-auto' strokeWidth={1.5} />;
		case 'about':
			return <UserRound className='w-full h-auto' strokeWidth={1.5} />;
		case 'activities':
			return <ScrollText className='w-full h-auto' strokeWidth={1.5} />;
		case 'contact':
			return <Phone className='w-full h-auto' strokeWidth={1.5} />;
		case 'github':
			return <Github className='w-full h-auto' strokeWidth={1.5} />;
		case 'linkedin':
			return <Linkedin className='w-full h-auto' strokeWidth={1.5} />;
		default:
			return <span>Icon not found</span>;
	}
};

const NavButton = ({ x, y, label, link, icon, newTab }: NavButtonProps) => {
	return (
		<div
			className='absolute cursor-pointer z-50'
			style={{ transform: `translate(${x}, ${y})` }}>
			<Link
				href={link}
				target={newTab ? '_blank' : '_self'}
				className='relative text-foreground rounded-full flex items-center justift-center
                bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] right-10
                shadow-glass-inset hover:shadow-glass-sm'
				aria-label={label}>
				<span
					className='relative w-20 h-20 p-4 
                            animate-spin-slow-reverse group-hover:pause hover:text-accent'>
					{getIcon(icon)}

					<span className='peer bg-transparent absolute top-0 left-0 w-full h-full' />

					<span
						className='absolute font-bold hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2
							-translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap'>
						{label}
					</span>
				</span>
			</Link>
		</div>
	);
};

export default NavButton;
