import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const backend = "https://gamebook-finalized-backend.vercel.app";

const GamesList = () => {
	const navigate = useNavigate();

	// Function to handle row click
	const handleRowClick = (product) => {
		navigate("/details", { state: { product } });
	};

	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [searchQuery, setSearchQuery] = useState({
		title: "",
		publisher: "",
		year: "",
		price: "",
	});
	const [newProduct, setNewProduct] = useState({
		title: "",
		publisher: "",
		year: 0,
		price: 0,
	});
	const [editModalOpen, setEditModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [formData, setFormData] = useState({
		title: "",
		publisher: "",
		year: 0,
		price: 0,
	});

	useEffect(() => {
		fetchProducts();
	}, []);

	// const fetchProducts = async () => {
	// 	try {
	// 		const response = await axios.get("https://gamebook-finalized-backend.vercel.app");
	// 		setProducts(response.data);
	// 		setFilteredProducts(response.data); // Initialize filtered products with all products
	// 	} catch (error) {
	// 		console.error("Error fetching products:", error);
	// 	}
	// };

	const fetchProducts = async () => {
		try {
			const token = localStorage.getItem("token"); // Get the token from localStorage

			// Fetch user-specific products with the token
			const response = await axios.get(`${backend}/api/products`, {
				headers: {
					Authorization: `Bearer ${token}`, // Attach the token in the Authorization header
				},
			});

			// Log the response for debugging
			console.log("Fetched products:", response.data);

			// Update the state with fetched products
			setProducts(response.data);
			setFilteredProducts(response.data); // Update the filtered products as well
		} catch (error) {
			console.error("Error fetching products:", error);
		}
	};

	// Search functionality
	const handleSearch = () => {
		let filtered = products.filter((product) => {
			return (
				(product.title
					.toLowerCase()
					.includes(searchQuery.title.toLowerCase()) ||
					!searchQuery.title) &&
				(product.publisher
					.toLowerCase()
					.includes(searchQuery.publisher.toLowerCase()) ||
					!searchQuery.publisher) &&
				(product.year.toString().includes(searchQuery.year) ||
					!searchQuery.year) &&
				(product.price.toString().includes(searchQuery.price) ||
					!searchQuery.price)
			);
		});
		setFilteredProducts(filtered);
	};

	// Clear search and reset filtered products
	const handleClearSearch = () => {
		setSearchQuery({ title: "", publisher: "", year: "", price: "" });
		setFilteredProducts(products); // Reset filtered products to all products
	};

	// Add a new product
	// const handleAddProduct = async () => {
	// 	try {
	// 		await axios.post("https://gamebook-finalized-backend.vercel.app", newProduct);
	// 		fetchProducts(); // Refresh the product list
	// 		setNewProduct({ title: "", publisher: "", year: 0, price: 0 });
	// 	} catch (error) {
	// 		console.error("Error adding product:", error);
	// 	}
	// };

	const handleAddProduct = async () => {
		try {
			const token = localStorage.getItem("token"); // Get the token from localStorage

			const response = await axios.post(`${backend}/api/products`, newProduct, {
				headers: {
					Authorization: `Bearer ${token}`, // Attach the token in the Authorization header
				},
			});
			fetchProducts(); // Refresh the product list
			setNewProduct({ title: "", publisher: "", year: 0, price: 0 });

			console.log("Product created:", response.data); // The created product
		} catch (error) {
			console.error("Error creating product", error);
		}
	};

	// const handleDelete = async (id) => {
	// 	try {
	// 		const token = localStorage.getItem("token"); // Get the token from localStorage

	// 		await axios.delete(`http://localhost:3000/api/products/${id}`, {
	// 			headers: {
	// 				Authorization: `Bearer ${token}`, // Attach the token in the Authorization header
	// 			},
	// 		});

	// 		// Filter out the deleted product from the list
	// 		setProducts(products.filter((product) => product._id !== id));
	// 		setFilteredProducts(
	// 			filteredProducts.filter((product) => product._id !== id)
	// 		); // Update filtered products if needed

	// 		console.log("Product deleted successfully");
	// 	} catch (error) {
	// 		console.error("Error deleting product:", error);
	// 	}
	// };

	const handleDelete = async (id) => {
		try {
			const token = localStorage.getItem("token"); // Get the token from localStorage

			await axios.delete(`${backend}/api/products/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`, // Attach the token in the Authorization header
				},
			});

			// Filter out the deleted product from the list
			setProducts(products.filter((product) => product._id !== id));
			setFilteredProducts(
				filteredProducts.filter((product) => product._id !== id)
			); // Update filtered products if needed

			console.log("Product deleted successfully");
		} catch (error) {
			console.error("Error deleting product:", error);
		}
	};

	const handleEdit = (product) => {
		setSelectedProduct(product);
		setFormData(product);
		setEditModalOpen(true);
	};

	// const handleUpdate = async () => {
	// 	try {
	// 		await axios.put(
	// 			`http://localhost:3000/api/products/${selectedProduct._id}`,
	// 			formData
	// 		);
	// 		fetchProducts(); // Refresh the product list
	// 		setEditModalOpen(false); // Close modal
	// 	} catch (error) {
	// 		console.error("Error updating product:", error);
	// 	}
	// };

	const handleUpdate = async () => {
		try {
			const token = localStorage.getItem("token"); // Get the token from localStorage

			await axios.put(
				`${backend}/api/products/${selectedProduct._id}`,
				formData,
				{
					headers: {
						Authorization: `Bearer ${token}`, // Attach the token in the Authorization header
					},
				}
			);

			fetchProducts(); // Refresh the product list
			setEditModalOpen(false); // Close modal

			console.log("Product updated successfully");
		} catch (error) {
			console.error("Error updating product:", error);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<>
			<Navbar />
			<div className='container mx-auto p-4'>
				{/* Search Form */}
				<div className='mb-6'>
					<h2 className='text-xl font-bold mb-4 text-center'>Search Games</h2>
					<div className='grid grid-cols-4 gap-4 mb-4'>
						<input
							type='text'
							name='title'
							placeholder='Search by Title'
							value={searchQuery.title}
							onChange={(e) =>
								setSearchQuery({ ...searchQuery, title: e.target.value })
							}
							className='border px-4 py-2 rounded'
						/>
						<input
							type='text'
							name='publisher'
							placeholder='Search by Publisher'
							value={searchQuery.publisher}
							onChange={(e) =>
								setSearchQuery({ ...searchQuery, publisher: e.target.value })
							}
							className='border px-4 py-2 rounded'
						/>
						<input
							type='number'
							name='year'
							placeholder='Search by Year'
							value={searchQuery.year}
							onChange={(e) =>
								setSearchQuery({ ...searchQuery, year: e.target.value })
							}
							className='border px-4 py-2 rounded'
						/>
						<input
							type='number'
							name='price'
							placeholder='Search by Price'
							value={searchQuery.price}
							onChange={(e) =>
								setSearchQuery({ ...searchQuery, price: e.target.value })
							}
							className='border px-4 py-2 rounded'
						/>
					</div>
					<button
						onClick={handleSearch}
						className='bg-blue-500 text-white px-4 py-2 rounded mr-2'
					>
						Search
					</button>
					<button
						onClick={handleClearSearch}
						className='bg-gray-500 text-white px-4 py-2 rounded'
					>
						Clear
					</button>
				</div>

				<hr />
				<hr />
				<hr />
				<hr />

				{/* Products Table */}
				<h1 className='text-2xl font-bold mb-4 text-center'>Games List</h1>
				<table className='table-auto w-full border-collapse'>
					<thead>
						<tr className='bg-gray-200'>
							<th className='border px-4 py-2'>Title</th>
							<th className='border px-4 py-2'>Publisher</th>
							<th className='border px-4 py-2'>Year</th>
							<th className='border px-4 py-2'>Price</th>
							<th className='border px-4 py-2'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{filteredProducts.map((product) => (
							<tr key={product._id} className='text-center cursor-pointer'>
								<td
									className='border px-4 py-2'
									onClick={() => handleRowClick(product)}
								>
									{product.title}
								</td>
								<td
									className='border px-4 py-2'
									onClick={() => handleRowClick(product)}
								>
									{product.publisher}
								</td>
								<td
									className='border px-4 py-2'
									onClick={() => handleRowClick(product)}
								>
									{product.year}
								</td>
								<td
									className='border px-4 py-2'
									onClick={() => handleRowClick(product)}
								>
									${product.price}
								</td>
								<td className='border px-4 py-2 space-x-2'>
									<button
										onClick={() => handleEdit(product)}
										className='bg-blue-500 text-white px-3 py-1 rounded'
									>
										Edit
									</button>
									<button
										onClick={() => handleDelete(product._id)}
										className='bg-red-500 text-white px-3 py-1 rounded'
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>

				{/* Add New Product Form */}
				<div className='my-20  p-10 border border-black rounded-2xl'>
					<h2 className='text-xl font-bold mt-8 mb-4 text-center'>
						Add New Game
					</h2>
					<form
						onSubmit={(e) => e.preventDefault()}
						className='flex flex-col gap-4 mb-4'
					>
						<label htmlFor=''>Title</label>
						<input
							type='text'
							name='title'
							placeholder='Title'
							value={newProduct.title}
							onChange={(e) =>
								setNewProduct({ ...newProduct, title: e.target.value })
							}
							className='border px-4 py-2 rounded'
						/>
						<label htmlFor=''>Publisher</label>
						<input
							type='text'
							name='publisher'
							placeholder='Publisher'
							value={newProduct.publisher}
							onChange={(e) =>
								setNewProduct({ ...newProduct, publisher: e.target.value })
							}
							className='border px-4 py-2 rounded'
						/>
						<label htmlFor=''>Release Year</label>
						<input
							type='number'
							name='year'
							placeholder='Year'
							value={newProduct.year}
							onChange={(e) =>
								setNewProduct({ ...newProduct, year: e.target.value })
							}
							className='border px-4 py-2 rounded'
						/>
						<label htmlFor=''>Price</label>
						<input
							type='number'
							name='price'
							placeholder='Price'
							value={newProduct.price}
							onChange={(e) =>
								setNewProduct({ ...newProduct, price: e.target.value })
							}
							className='border px-4 py-2 rounded'
						/>
						<button
							onClick={handleAddProduct}
							className='bg-green-500 text-white px-4 py-2 rounded col-span-4 w-48 mx-auto block'
						>
							Add Product
						</button>
					</form>
				</div>

				{editModalOpen && (
					<div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center'>
						<div className='bg-white p-6 rounded shadow-lg'>
							<h2 className='text-xl font-bold mb-4'>Edit Product</h2>
							<form>
								<div className='mb-4'>
									<label className='block text-sm font-bold mb-2'>Title</label>
									<input
										type='text'
										name='title'
										value={formData.title}
										onChange={handleInputChange}
										className='w-full border px-3 py-2 rounded'
									/>
								</div>
								<div className='mb-4'>
									<label className='block text-sm font-bold mb-2'>
										Publisher
									</label>
									<input
										type='text'
										name='publisher'
										value={formData.publisher}
										onChange={handleInputChange}
										className='w-full border px-3 py-2 rounded'
									/>
								</div>
								<div className='mb-4'>
									<label className='block text-sm font-bold mb-2'>Year</label>
									<input
										type='number'
										name='year'
										value={formData.year}
										onChange={handleInputChange}
										className='w-full border px-3 py-2 rounded'
									/>
								</div>
								<div className='mb-4'>
									<label className='block text-sm font-bold mb-2'>Price</label>
									<input
										type='number'
										name='price'
										value={formData.price}
										onChange={handleInputChange}
										className='w-full border px-3 py-2 rounded'
									/>
								</div>
								<div className='flex justify-end'>
									<button
										type='button'
										onClick={() => setEditModalOpen(false)}
										className='bg-gray-500 text-white px-4 py-2 rounded mr-2'
									>
										Cancel
									</button>
									<button
										type='button'
										onClick={handleUpdate}
										className='bg-blue-500 text-white px-4 py-2 rounded'
									>
										Save
									</button>
								</div>
							</form>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default GamesList;
