import { Link } from "react-router-dom";

export default function Rightbar() {
	return (
		<div className='w-60 h-[calc(100vh-64px)] p-5 bg-slate-200 flex flex-col gap-4'>
			<div className='mb-4'>
				<h4 className='font-bold text-lg'>Creators you follow</h4>
				<hr className='border-t-4 mt-3 border-gray-400' />

				<ul className='mt-2'>
					<li className='hover:bg-blue-300 p-2 rounded-lg cursor-pointer'>
						Pewdiepie
					</li>
					<li className='hover:bg-blue-300 p-2 rounded-lg cursor-pointer'>
						Shroud
					</li>
					<li className='hover:bg-blue-300 p-2 rounded-lg cursor-pointer'>
						Ninja
					</li>
					<li className='hover:bg-blue-300 p-2 rounded-lg cursor-pointer'>
						Pokimane
					</li>
					<li className='hover:bg-blue-300 p-2 rounded-lg cursor-pointer'>
						Asmongold
					</li>
				</ul>
			</div>
			<Link to='/games'>
				<button className='p-2 border rounded-lg bg-green-600 hover:bg-green-500 text-white'>
					Your Games
				</button>
			</Link>
		</div>
	);
}
