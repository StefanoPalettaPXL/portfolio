import HomeButton from '@/components/HomeButton';
import Link from 'next/link';

export default function SubPagesLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center sm:px-16 px-4'>
			<HomeButton />
			{children}
		</main>
	);
}
