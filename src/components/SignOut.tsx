import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';

const SignOut = () => {
	const navigate = useNavigate();

	const handleSignOut = async () => {
		try {
			await auth.signOut();
			navigate('/signin');
		} catch (error) {
			console.error('Error signing out:', error);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center h-[88vh] w-fit m-auto">
			<h1 className="text-center">Sign Out</h1>
			<h3 className="mb-4 text-gray-400">Are you sure you want to sign out?</h3>
			<button
				onClick={handleSignOut}
				className="w-full p-2 my-4 font-bold rounded border transition-colors duration-500 border-teal-300 text-teal-300 hover:bg-slate-800 focus:bg-teal-300 focus:text-white"
			>
				Sign Out
			</button>
		</div>
	);
};

export default SignOut;