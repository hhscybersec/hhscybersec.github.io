import Workshop from "./Workshop"

const Meetings = () => {
	return (
		<div className="w-2/3 sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-4/5 m-auto mb-16">
            <div className="text-center leading-loose py-8">
    			<h1>Meetings</h1>
                <p className="text-gray-400">Archived meeting slides and resources from our past meetings.</p>
            </div>
            <div className="m-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <Workshop number={0} title={"Year-Long Plans"} date={"9/22/2025"} slidesLink={"https://docs.google.com/presentation/d/1mPUCGvNj3imbnlqK48rJp0ThTUekardiRkKMd1szJRc/edit?usp=sharing"} />
                <Workshop number={1} title={"Command Line Basics"} date={"9/29/2025"} slidesLink={"https://docs.google.com/presentation/d/1w8KxUjFBx0kUfe1OdhKoY9yKwyOyoqIPFsntwTyviOo/edit?usp=sharing"} />
                <Workshop number={2} title={"Intro to PicoCTF"} date={"10/05/2025"} slidesLink={"https://docs.google.com/presentation/d/19B0srNeZ3cj8mKtUtxOyxIyiqFiZpsBL1-deafv-ZSs/edit?usp=sharing"} />
            </div>
		</div>
	)
}

export default Meetings