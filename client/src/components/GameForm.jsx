import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../config.js";
import { useGameContext } from "../hooks/useGameContext.js";

export default function GameForm() {
	const { dispatch } = useGameContext();

	const [title, setTitle] = useState("");
	const [year, setYear] = useState("");
	const [rating, setRating] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const game = { title, year: parseInt(year), rating: parseInt(rating) };

		try {
			const response = await axios.post(`${backendUrl}/api/games`, game, {
				headers: { "Content-Type": "application/json" },
			});

			const json = response.data;

			setError(null);
			setTitle("");
			setYear("");
			setRating("");

			dispatch({ type: "CREATE_GAME", payload: json.data });

			console.log(`New game added!`, json);
		} catch (error) {
			if (error.response) {
				setError(error.response.data.error);
			} else if (error.request) {
				setError("No response received from server.");
			} else {
				setError(error.message);
			}
		}
	};

	return (
		<div className='bg-slate-100 p-8 rounded-lg shadow-lg m-5 max-w-md mx-auto'>
			<form onSubmit={handleSubmit}>
				<h2 className='text-2xl font-bold mb-6 text-center'>Add a New Game</h2>

				<label className='block text-gray-700 mb-2'>Game Title</label>
				<input
					type='text'
					name='title'
					className='w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>

				<label className='block text-gray-700 mb-2'>Release Year</label>
				<input
					type='number'
					name='year'
					className='w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
					onChange={(e) => setYear(e.target.value)}
					value={year}
				/>

				<label className='block text-gray-700 mb-2'>Rating</label>
				<input
					type='number'
					name='rating'
					className='w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
					onChange={(e) => setRating(e.target.value)}
					value={rating}
				/>

				<button
					type='submit'
					className='w-full bg-green-600 hover:bg-green-500 text-white py-2 rounded-lg transition-all duration-200'
				>
					Add Game
				</button>

				{error && <div className='mt-4 text-red-500 text-center'>{error}</div>}
			</form>
		</div>
	);
}
