import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const backend = "https://gamebook-finalized-backend.vercel.app";

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSignup = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(`${backend}/api/auth/signup`, {
				name,
				email,
				password,
			});
			localStorage.setItem("token", res.data.token);
			navigate("/");
		} catch (error) {
			console.error("Signup failed:", error);
		}
	};

	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
			<div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
				<h2 className='text-2xl font-bold text-center mb-4'>
					Create an Account
				</h2>
				<form onSubmit={handleSignup}>
					<div className='mb-4'>
						<label className='block text-gray-700'>Name</label>
						<input
							type='text'
							className='w-full px-4 py-2 border rounded-lg focus:outline-none'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Email</label>
						<input
							type='email'
							className='w-full px-4 py-2 border rounded-lg focus:outline-none'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Password</label>
						<input
							type='password'
							className='w-full px-4 py-2 border rounded-lg focus:outline-none'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button
						type='submit'
						className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600'
					>
						Sign Up
					</button>
				</form>
				<p className='text-center text-sm mt-4'>
					Already have an account?{" "}
					<Link to='/login' className='text-blue-500 hover:underline'>
						Log in here
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Signup;
