import { useNavigate } from "react-router-dom";

const SignoutButton = () => {
	const navigate = useNavigate();

	const handleSignout = () => {
		localStorage.removeItem("token"); // Remove the token from localStorage
		navigate("/login"); // Redirect to login page
	};

	return (
		<button
			onClick={handleSignout}
			className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600'
		>
			Sign Out
		</button>
	);
};

export default SignoutButton;
``;
