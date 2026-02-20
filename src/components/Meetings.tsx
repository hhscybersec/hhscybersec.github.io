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
                <Workshop number={2} title={"Intro to PicoCTF"} date={"10/5/2025"} slidesLink={"https://docs.google.com/presentation/d/19B0srNeZ3cj8mKtUtxOyxIyiqFiZpsBL1-deafv-ZSs/edit?usp=sharing"} />
                <Workshop number={3} title={"The Dark Web"} date={"11/3/2025"} slidesLink={"https://docs.google.com/presentation/d/1hHNGmzugyKld5153SWKoHzVrAwQ7aCoqPpvC3_m_RcU/edit?usp=sharing"} />
                <Workshop number={4} title={"SQL Injections"} date={"11/10/2025"} slidesLink={"https://docs.google.com/presentation/d/1dm4NYGNhW0F_XojcfzKMinv-FO2a6rSDpU6HBX-4L24/edit?usp=sharing"} />
                <Workshop number={5} title={"Cryptography"} date={"11/17/2025"} slidesLink={"https://docs.google.com/presentation/d/163z1F7xcmyibKfWqNFv4fpB1or99b4PmsrlSocp4c4I/edit?usp=sharing"} />
                <Workshop number={6} title={"Cryptography pt. 2"} date={"11/24/2025"} slidesLink={"https://docs.google.com/presentation/d/1fJDITPSUy5PSrvM2XV-fgz7bv-exW08_eW1IK07xNTk/edit?usp=sharing"} />
                <Workshop number={7} title={"Cookies"} date={"12/1/2025"} slidesLink={"https://docs.google.com/presentation/d/1bt3QVTSbSndtgdHfFGZxfjcoTlb6LlNd0XeTYD7AxaY/edit?usp=sharing"} />
                <Workshop number={8} title={"Intro to Reverse Engineering"} date={"1/12/2026"} slidesLink={"https://docs.google.com/presentation/d/1jmygEc8WZxxUVR0xFBwj8A51P_nDdB-YnAMrZQ3c8Z4/edit?usp=sharing"} />
                <Workshop number={9} title={"Blockchain"} date={"1/26/2026"} slidesLink={"https://docs.google.com/presentation/d/19UYzLI3tkMtPq9gx4XWhGKnNj7XZNCl0Vm3o23jJwiI/edit?usp=sharing"} />
                <Workshop number={10} title={"DDoS Attacks"} date={"2/2/2026"} slidesLink={"https://docs.google.com/presentation/d/1FCSjXBf0dhVSyWbK-PeajWS18cwfagk0vmyqS925gaU/edit?usp=sharing"} />
                <Workshop number={11} title={"Networking Protocols"} date={"2/9/2026"} slidesLink={"https://docs.google.com/presentation/d/1TGMO3lVyqDqbc7tVJ7iTgE4KCiqyomdRN7kEdUmW56c/edit?usp=sharing"} />
            </div>
		</div>
	)
}

export default Meetings