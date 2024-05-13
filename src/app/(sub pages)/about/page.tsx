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

			<p className='text-center w-2/3'>
				<span>
					Ik ben Stefano Paletta, een derdejaarsstudent Toegepaste Informatica aan de Hogeschool PXL. Mijn fascinatie voor digitale media, zoals apps, websites en games, komt voort uit mijn levenslange interactie met computers. Naast deze digitale wereld geniet ik van fitnessen, poolen en karten.
				</span>
				<br />
				<br />
				<span>
					Mijn Thalento-rapport onthult dat ik graag in contact ben met anderen. Mijn zelfvertrouwen helpt me om stressvolle situaties onder controle te houden. Ik ben behulpzaam, maar waardeer formele erkenning meer dan informele waardering.
				</span>
				<br />
				<br />
				<span>
					Mijn ambitie is om mijn kennis van de theoretische informatica te verdiepen door een schakeljaar te doen en uiteindelijk mijn masterdiploma te behalen. Binnen vijf jaar wil ik mijn eigen producten of services op de markt brengen, waarbij ik mijn vaardigheden gebruik om complexe problemen op te lossen.
				</span>
				<br />
				<br />
				<span>
					Tijdens mijn studie aan de PXL heb ik praktische programmeervaardigheden geleerd voor het maken van basisapplicaties. Ik wil echter nog enkele softskills ontwikkelen, zoals doelmatig presenteren en producten verkopen, die essentieel zijn voor mijn toekomstige carrière.
				</span>
			</p>
		</>
	);
}
