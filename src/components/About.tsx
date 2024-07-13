import Officer from './Officer'

const About = () => {
	return (
		<div>
			<div className="text-center leading-loose py-8">
				<h1>About Us</h1>
				<p className="text-gray-400 leading-snug w-3/4 md:w-1/2 lg:w-1/3 m-auto">Empowering the next generation of cybersecurity experts through hands-on learning and collaborative problem-solving.</p>
			</div>
			<div className="w-fit m-auto">
				<h2 className='text-center pb-6'>Officers</h2>
				<div className='pb-8 w-4/5 sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-4/5 m-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
					<Officer name="Name" position="Position" picture="/officers/placeholder.webp"/>
					<Officer name="Name" position="Position" picture="/officers/placeholder.webp"/>
					<Officer name="Name" position="Position" picture="/officers/placeholder.webp"/>
					<Officer name="Name" position="Position" picture="/officers/placeholder.webp"/>
					<Officer name="Name" position="Position" picture="/officers/placeholder.webp"/>
					<Officer name="Name" position="Position" picture="/officers/placeholder.webp"/>
					<Officer name="Name" position="Position" picture="/officers/placeholder.webp"/>
					<Officer name="Name" position="Position" picture="/officers/placeholder.webp"/>
					<Officer name="Name" position="Position" picture="/officers/placeholder.webp"/>
					<Officer name="Name" position="Position" picture="/officers/placeholder.webp"/>
				</div>
			</div>
		</div>
	)
}

export default About