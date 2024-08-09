import React from 'react';

interface WorkshopProps {
	number: number;
	title: string;
	date: string;
	slidesLink: string;
}

const Workshop: React.FC<WorkshopProps> = ({ title, number, date, slidesLink }) => {
	return (
		<a href={slidesLink} target='_blank' className='text-center lg:p-3 xl:p-4 border aspect-square border-gray-800 hover:border-teal-300 ease-linear duration-300 overflow-hidden flex flex-col justify-center items-center bg-slate-800 hover:bg-slate-800 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] rounded-xl bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-1000'>
			<p className='text-gray-400'>{date}</p>
			<h2>GM #{number}:</h2>
			<p>{title}</p>
            <a className='underline text-teal-300' href={slidesLink}>Link to slides</a>
		</a>
	);
}

export default Workshop;