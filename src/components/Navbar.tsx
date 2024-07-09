import { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const handleLinkClick = () => {
		setIsOpen(false);
	};

	return (
		<nav className="px-8 py-6 text-white flex flex-row justify-between items-center">
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
			<div className={`flex-col ${isOpen ? 'flex' : 'hidden'} md:flex md:flex-row md:gap-5 absolute md:static top-16 left-0 right-0 bg-black md:bg-transparent`}>
				<Link to={'/about'} onClick={handleLinkClick}><h4>About Us</h4></Link>
				<Link to={'/meetings'} onClick={handleLinkClick}><h4>Meetings</h4></Link>
				<Link to={'/challenges'} onClick={handleLinkClick}><h4>Challenges</h4></Link>
				<Link to={'/leaderboard'} onClick={handleLinkClick}><h4>Leaderboard</h4></Link>
			</div>
			<div className='hidden md:flex'>
				<h4>Login stuff [wip]</h4>
	  		</div>
		</nav>
	);
}

export default Navbar;