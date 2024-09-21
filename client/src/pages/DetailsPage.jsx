import { useLocation, useNavigate } from "react-router-dom";

const DetailsPage = () => {
	const location = useLocation();
	const product = location.state?.product; // Get the passed product data
	const navigate = useNavigate();

	if (!product) {
		return <p>No game selected</p>;
	}

	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-3xl font-bold mb-6 text-center'>Game Details</h1>
			<div className='border p-6 rounded-lg shadow-lg'>
				<h2 className='text-2xl font-bold mb-4'>
					<strong>Game Title:</strong>
					{product.title}
				</h2>
				<p className='mb-2'>
					<strong>Publisher:</strong> {product.publisher}
				</p>
				<p className='mb-2'>
					<strong>Year:</strong> {product.year}
				</p>
				<p className='mb-2'>
					<strong>Price:</strong> ${product.price}
				</p>
			</div>

			<button
				onClick={() => navigate(-1)} // Go back to previous page
				className='bg-blue-500 text-white px-4 py-2 rounded mt-4'
			>
				Go Back
			</button>
		</div>
	);
};

export default DetailsPage;
