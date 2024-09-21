import { Link } from "react-router-dom";

export default function SidebarButton({ text }) {
	return (
		<Link
			to={`/${text.toLowerCase()}`}
			className='hover:bg-blue-300 p-2 rounded-lg cursor-pointer'
		>
			{text}
		</Link>
	);
}
