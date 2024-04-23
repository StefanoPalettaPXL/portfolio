import type { Metadata } from 'next';
import { Inter, Rubik } from 'next/font/google';
import './globals.css';

import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

export const metadata: Metadata = {
	title: 'Portfolio | Stefano Paletta',
	description: 'Created by Stefano Paletta',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={clsx(inter.variable, 'bg-background text-foreground')}>
				{children}
			</body>
		</html>
	);
}
