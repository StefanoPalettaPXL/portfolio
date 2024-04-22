import Image from 'next/image';
import bg from '../../../../public/background.png';
import ActivityList from '@/components/activities/index';
import Sword from '@/components/models/Sword';
import { activityData } from '@/data';
import RenderModel from '@/components/RenderModel';

export default function Home() {
	return (
		<>
			<Image
				src={bg}
				alt='background-image'
				className='w-full h-full object-cover object-center opacity-25'
				fill
			/>

			<h1 className='fixed top-10 w-full text-center text-4xl font-bold text-white'>
				Activiteiten
			</h1>

			<div className='fixed mt-28'>
				<ActivityList activities={activityData} />
			</div>

			<div className='flex items-center justify-center fixed top-20 left-0 h-screen'>
				<RenderModel>
					<Sword />
				</RenderModel>
			</div>
		</>
	);
}
