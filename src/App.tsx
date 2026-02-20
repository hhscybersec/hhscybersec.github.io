import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from './components/About'
import Meetings from './components/Meetings'
import Resources from './components/Resources'
import Footer from './components/Footer'
import CookiesSetup from './components/CookiesSetup';

function App() {
    return (
        <div className="relative min-h-screen bg-slate-900 overflow-hidden">
            <div 
                className="fixed inset-0 opacity-20 pointer-events-none z-0"
                style={{ 
                    backgroundImage: `linear-gradient(to right, #0891b2 1px, transparent 1px), linear-gradient(to bottom, #0891b2 1px, transparent 1px)`,
                    backgroundSize: '40px 40px' 
                }}
            ></div>

            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse pointer-events-none z-0"></div>

            <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent,rgba(2,6,23,1))]"></div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <BrowserRouter>
                    <CookiesSetup />
                    <Navbar />
                    
                    <main className="flex-grow">
                        <Routes>
                            <Route path='/' element={<Home />}></Route>
                            <Route path='/about' element={<About />}></Route>
                            <Route path='/meetings' element={<Meetings />}></Route>
                            <Route path='/resources' element={<Resources />}></Route>
                        </Routes>
                    </main>

                    <Footer />
                </BrowserRouter>
            </div>

        </div>
    )
}

export default App;