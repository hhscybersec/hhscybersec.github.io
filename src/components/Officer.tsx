interface OfficerProps {
	name: string;
	position: string;
	picture: string;
}

const Officer: React.FC<OfficerProps> = ({ name, position, picture }) => {
	return (
		<div className="max-w-sm mx-auto border border-gray-800 shadow-md rounded-lg overflow-hidden duration-300 hover:bg-slate-800 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-1000">
			<img className="w-full p-4 aspect-square object-cover rounded-lg" src={picture} alt={`${name}'s picture`} />
			<div className="text-center leading-normal">
				<p className="font-bold p-0 m-0">{name}</p>
				<p className="font-bold text-teal-300 p-0">{position}</p>
			</div>
		</div>
	);
};

export default Officer;