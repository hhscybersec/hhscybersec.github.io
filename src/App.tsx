import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from './components/About'
import Meetings from './components/Meetings'
import Resources from './components/Resources'
import Challenges from './components/Challenges'
import Leaderboard from './components/Leaderboard'
import Footer from './components/Footer'

import CookiesSetup from './components/CookiesSetup';

function App() {
	return (
		<div className="bg-slate-900">
			<BrowserRouter>
                <CookiesSetup />
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route path='/meetings' element={<Meetings />}></Route>
					<Route path='/resources' element={<Resources />}></Route>
					<Route path='/challenges' element={<Challenges />}></Route>
					<Route path='/leaderboard' element={<Leaderboard />}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App