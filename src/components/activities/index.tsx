import React from 'react';

type Activity = {
	title: string;
	description: string;
	location: string;
	date: string;
};

type SubCategory = {
	title: string;
	projects: Activity[];
};

type Category = {
	category: string;
	projects: (Activity | SubCategory)[];
};

interface ActivityListProps {
	activities: Category[];
}

const ActivityList = ({ activities }: ActivityListProps) => {
	return (
		<div
			className='container shadow-xl shadow-slate-900 m-5 rounded-xl bg-slate-900 
				bg-opacity-20 block mx-auto py-5 px-5 overflow-y-auto max-h-[750px]'>
			{activities.map((activity) => (
				<div key={activity.category} className='mb-8'>
					<h1 className='text-3xl font-bold mb-4 text-orange-200'>{activity.category}</h1>
					{activity.projects.map((project, index) => (
						<div key={index} className='mb-4'>
							{'projects' in project ? ( // Check if the project is a subcategory
								<>
									<h2 className='text-xl font-semibold mb-2'>{project.title}</h2>
									{project.projects.map((subProject, idx) => (
										<div
											key={idx}
											className='bg-white shadow-md rounded-md p-6 mb-4'>
											<h3 className='text-lg font-semibold mb-2 text-gray-800'>
												{subProject.title}
											</h3>
											<p className='mb-2 text-gray-700'>
												{subProject.description}
											</p>
											<p className='mb-2 text-gray-700'>
												<strong>Locatie:</strong> {subProject.location}
											</p>
											<p className='mb-2 text-gray-700'>
												<strong>Datum:</strong> {subProject.date}
											</p>
										</div>
									))}
								</>
							) : (
								// If it's not a subcategory, render as a regular project
								<div className='bg-white shadow-md rounded-md p-6 mb-4'>
									<h2 className='text-xl text-gray-700 font-semibold mb-2'>
										{project.title}
									</h2>
									<p className='mb-2 text-gray-700'>
										{(project as Activity).description}
									</p>
									<p className='mb-2 text-gray-700'>
										<strong>Locatie:</strong> {(project as Activity).location}
									</p>
									<p className='mb-2 text-gray-700'>
										<strong>Datum:</strong> {(project as Activity).date}
									</p>
								</div>
							)}
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default ActivityList;
