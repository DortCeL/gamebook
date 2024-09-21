import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ username }) {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const handleAvatarClick = () => {
		setDropdownOpen(!dropdownOpen);
	};

	return (
		<header>
			<div className='w-full h-16 flex justify-between items-center px-8 md:px-36 bg-slate-800 text-white'>
				<Link to='/'>
					<h1 className='text-white hover:text-slate-200 text-xl font-extrabold'>
						Gamebook
					</h1>
				</Link>

				<div className='relative'>
					<div className='flex items-center gap-4'>
						<span className='text-sm font-medium'>{username}</span>
						<img
							src='https://via.placeholder.com/40'
							alt='User Avatar'
							className='w-10 h-10 rounded-full border-2 border-white cursor-pointer hover:border-slate-400'
							onClick={handleAvatarClick}
						/>
					</div>

					{dropdownOpen && (
						<div className='absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg'>
							<Link to='/games'>
								<button className='w-full text-left px-4 py-2 hover:bg-gray-200'>
									My Games
								</button>
							</Link>
							<button className='w-full text-left px-4 py-2 hover:bg-gray-200'>
								Sign Out
							</button>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
