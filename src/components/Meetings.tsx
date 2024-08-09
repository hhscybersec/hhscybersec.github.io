import Workshop from "./Workshop"

const Meetings = () => {
	return (
		<div className="w-2/3 sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-4/5 m-auto mb-16">
            <div className="text-center leading-loose py-8">
    			<h1>Meetings</h1>
                <p className="text-gray-400">Archived meeting slides and resources from our past meetings.</p>
            </div>
            <div className="m-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <Workshop number={1} title={"Sample Workshop Title"} date={"08/19/2024"} slidesLink={""} />
                <Workshop number={2} title={"Sample Workshop Title"} date={"08/19/2024"} slidesLink={""} />
                <Workshop number={3} title={"Sample Workshop Title"} date={"08/19/2024"} slidesLink={""} />
                <Workshop number={4} title={"Sample Workshop Title"} date={"08/19/2024"} slidesLink={""} />
                <Workshop number={5} title={"Sample Workshop Title"} date={"08/19/2024"} slidesLink={""} />
                <Workshop number={6} title={"Sample Workshop Title"} date={"08/19/2024"} slidesLink={""} />
                <Workshop number={7} title={"Sample Workshop Title"} date={"08/19/2024"} slidesLink={""} />
            </div>
		</div>
	)
}

export default Meetings