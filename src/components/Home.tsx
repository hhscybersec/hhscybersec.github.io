import HackerText from './HackerText';

const Home = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center h-[75vh]">
            
            <div className="w-fit h-fit relative text-center">
                
                <div className="absolute w-[500px] h-[475px] -left-44 md:-left-64 lg:-left-96 -top-64 opacity-30 rounded-full" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.5) 0%, rgba(34,211,238,0) 70%)' }}></div>

                <h1 className="text-gray-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    <HackerText text="HHS Cybersecurity Club" trigger="load" />
                </h1>
            
                <h4 className="mt-4 text-teal-300 font-mono text-lg">
                    <HackerText text="Mondays @ lunch in C200" trigger="load" />
                </h4>
            </div>
        </div>
    );
}

export default Home;