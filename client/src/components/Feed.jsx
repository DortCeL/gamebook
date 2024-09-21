import Slideshow from "./Slideshow";

export default function Feed() {
	return (
		<>
			<div className='bg-slate-400 w-full py-4'>
				<h1 className='text-slate-800 text-center text-4xl font-extrabold p-8'>
					Trending right now
				</h1>
				<Slideshow />
				<a
					href='https://store.steampowered.com/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<button className='bg-gray-900 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300 ease-in-out hover:shadow-xl focus:outline-none block mx-auto my-4 '>
						Explore
					</button>
				</a>
			</div>
		</>
	);
}
