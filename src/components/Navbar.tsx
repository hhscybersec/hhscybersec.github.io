import { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import HackerText from './HackerText';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const handleLinkClick = () => {
		setIsOpen(false);
	};

	return (
		<nav className="p-8 flex flex-row justify-between md:justify-evenly items-center w-full">
			<Link to={'/'}><h4 className='p-0 m-0'>HHS Cybersecurity</h4></Link>
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
				<Link to={'/about'} onClick={handleLinkClick}><h4 className='p-0 m-0 text-white hover:text-teal-300 transition-colors duration-300'><HackerText text="About Us" /></h4></Link>
				<Link to={'/meetings'} onClick={handleLinkClick}><h4 className='p-0 m-0 text-white hover:text-teal-300 transition-colors duration-300'><HackerText text="Meetings" /></h4></Link>
				<Link to={'/resources'} onClick={handleLinkClick}><h4 className='p-0 m-0 text-white hover:text-teal-300 transition-colors duration-300'><HackerText text="Resources" /></h4></Link>
			</div>
			<h4 className='m-0 p-0'><a href="" target='_blank'>Join our Discord</a></h4>
		</nav>
	);
}

export default Navbar;