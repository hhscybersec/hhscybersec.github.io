import Workshop from "./Workshop"

const Meetings = () => {
	return (
		<div className="p-8">
			<h1 className="text-center pb-8">Meetings</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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