import { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import { useUser } from '../contexts/UserContext';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { user } = useUser();

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const handleLinkClick = () => {
		setIsOpen(false);
	};

	return (
		<nav className="px-8 py-6 flex flex-row justify-between items-center w-full">
			<Link to={'/'}><h4>HHS Cybersecurity</h4></Link>
			<div className="md:hidden">
				<HamburgerMenu
					isOpen={isOpen}
					menuClicked={handleClick}
					width={18}
					height={15}
					color='white'
					animationDuration={0.5}
				/>
			</div>
			<div className={`flex-col ${isOpen ? 'flex' : 'hidden'} md:flex md:flex-row md:gap-5 absolute md:static top-20 left-8 right-0 bg-slate-900 md:bg-transparent`}>
				<Link to={'/about'} onClick={handleLinkClick}><h4 className='text-white hover:text-teal-300 transition-colors duration-300'>About Us</h4></Link>
				<Link to={'/meetings'} onClick={handleLinkClick}><h4 className='text-white hover:text-teal-300 transition-colors duration-300'>Meetings</h4></Link>
				<Link to={'/challenges'} onClick={handleLinkClick}><h4 className='text-white hover:text-teal-300 transition-colors duration-300'>Challenges</h4></Link>
				<Link to={'/leaderboard'} onClick={handleLinkClick}><h4 className='text-white hover:text-teal-300 transition-colors duration-300'>Leaderboard</h4></Link>
			</div>
			{user ? (
				<Link to={'/signout'} onClick={handleLinkClick} className='hidden md:flex'><h4 className='text-teal-300'>Welcome, {user.email}</h4></Link>
			) : (
				<Link to={'/signin'} onClick={handleLinkClick} className='hidden md:flex'><h4 className='text-teal-300'>Sign In</h4></Link>
			)}
		</nav>
	);
}

export default Navbar;