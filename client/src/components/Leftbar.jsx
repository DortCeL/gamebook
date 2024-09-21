import { Link } from "react-router-dom";
import SidebarButton from "./SidebarButton";
import SignoutButton from "./SignoutButton";

export default function Leftbar({ username }) {
	return (
		<>
			<div className='w-48 h-[calc(100vh-64px)] flex flex-col gap-2 p-5 bg-slate-300'>
				<img
					src='https://picsum.photos/80'
					alt=''
					className='w-20 h-20 rounded-full border-4 border-black mx-auto'
				/>

				<h4 className='font-extrabold text-center'>{username}</h4>
				<hr className='border-t-4 border-gray-400' />

				<div className='flex flex-col'>
					<SidebarButton text='Saved' />
					<SidebarButton text='Friends' />
					<SidebarButton text='Videos' />
					<SidebarButton text='Screenshots' />
				</div>
				<hr className='border-t-4 border-gray-400' />

				<SignoutButton />
			</div>
		</>
	);
}
