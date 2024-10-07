import Workshop from "./Workshop"

const Meetings = () => {
	return (
		<div className="w-2/3 sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-4/5 m-auto mb-16">
            <div className="text-center leading-loose py-8">
    			<h1>Meetings</h1>
                <p className="text-gray-400">Archived meeting slides and resources from our past meetings.</p>
            </div>
            <div className="m-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <Workshop number={0} title={"Introduction"} date={"9/30/2024"} slidesLink={"https://docs.google.com/presentation/d/1fS4N5aenI20SVkA37hRDzX07dZIvPwiweCKMFBN2qJE/edit?usp=sharing"} />
                <Workshop number={1} title={"Intro to Python"} date={"10/07/2024"} slidesLink={"https://docs.google.com/presentation/d/10ecaNvc0aUz-Ix-USUChPYEZCRGUX8KMSPHj-JP7EJU/edit?usp=sharing"} />
                {/* <Workshop number={2} title={"Malware & Keyloggers"} date={"10/14/2024"} slidesLink={"https://docs.google.com/presentation/d/1-ng-aoJTp1N4T78SV0vSOkhRv5tzx-i-HBEs8iIO5wA/edit?usp=sharing"} /> */}
                {/* <Workshop number={3} title={"Sample Workshop Title"} date={"08/19/2024"} slidesLink={""} />
                <Workshop number={4} title={"Sample Workshop Title"} date={"08/19/2024"} slidesLink={""} />
                <Workshop number={5} title={"Sample Workshop Title"} date={"08/19/2024"} slidesLink={""} />
                <Workshop number={6} title={"Sample Workshop Title"} date={"08/19/2024"} slidesLink={""} /> */}
            </div>
		</div>
	)
}

export default Meetings