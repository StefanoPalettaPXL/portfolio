import Image from 'next/image';
import bg from '../../public/background.png';
import RenderModel from '@/components/RenderModel';
import Jake from '@/components/models/Jake';
import Navigation from '@/components/navigation/Index';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between relative'>
			<Image
				src={bg}
				alt='background-image'
				className='w-full h-full object-cover object-center opacity-25'
				fill
			/>

			<h1 className='fixed top-4 left-4 font-bold font-serif text-4xl'>
				Hello, I'm Stefano!
			</h1>

			<div className='w-full h-screen'>
				<Navigation />
				<RenderModel>
					<Jake />
				</RenderModel>
			</div>
		</main>
	);
}
