import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from './components/About'
import Meetings from './components/Meetings'
import Challenges from './components/Challenges'
import Leaderboard from './components/Leaderboard'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut'
import Footer from './components/Footer'

function App() {
	return (
		<div className="bg-slate-900">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route path='/meetings' element={<Meetings />}></Route>
					<Route path='/challenges' element={<Challenges />}></Route>
					<Route path='/leaderboard' element={<Leaderboard />}></Route>
					<Route path='/signup' element={<SignUp />}></Route>
					<Route path='/signin' element={<SignIn />}></Route>
					<Route path='/signout' element={<SignOut />}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App