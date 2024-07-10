import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate();

	const handleSignIn = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate('/challenges');
		} catch (error) {
			console.error('Error signing in:', error);
			setError('Failed to sign in. Please check your credentials and try again.');
		}
	};

	const handleGoogleSignIn = async () => {
		try {
			await signInWithPopup(auth, provider);
			navigate('/challenges');
		} catch (error) {
			console.error('Error signing in with Google:', error);
			setError('Failed to sign in with Google.');
		}
	};

	return (
		<div className="flex flex-col justify-center items-center h-[88vh]">
			<form onSubmit={handleSignIn} className="rounded shadow-md">
				<h1 className="text-2xl py-4 text-center">Sign In</h1>
				{error && <p className="text-red-500">{error}</p>}
				<div className="mb-4">
					<label className="text-left text-white">Email</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full p-2 my-2 rounded border focus:ring-2 focus:outline-none bg-slate-900 border-teal-300 focus:ring-teal-300 text-teal-300 italic"
						placeholder='youremail@example.com'
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-white">Password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full p-2 my-2 rounded border focus:ring-2 focus:outline-none bg-slate-900 border-teal-300 focus:ring-teal-300 text-teal-300 italic"
						placeholder='Enter your password'
						required
					/>
				</div>
				<button type="submit" className="w-full p-2 my-2 font-bold rounded border transition-colors duration-500 border-teal-300 bg-teal-500 text-white hover:bg-slate-800 hover:text-teal-300">
					Sign In
				</button>

				<div className="">
					<button
						type="button"
						onClick={handleGoogleSignIn}
						className="w-full p-2 my-4 font-bold rounded border transition-colors duration-500 text-teal-300 border-teal-300 hover:bg-slate-700 focus:bg-teal-500 focus:text-white"
					>
						Sign In with Google
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignIn;