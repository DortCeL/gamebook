const Product = require("../models/product.model");

const getProducts = async (req, res) => {
	try {
		const products = await Product.find({ user: req.user._id });
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const createProduct = async (req, res) => {
	try {
		const product = await Product.create({
			...req.body,
			user: req.user._id, // Associate product with the logged-in user
		});
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const updateProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findOne({ _id: id, user: req.user._id }); // Find product by ID and user

		if (!product) {
			return res
				.status(404)
				.json({ message: "Product not found or not authorized" });
		}

		const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.status(200).json(updatedProduct);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const deleteProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findOne({ _id: id, user: req.user._id }); // Find product by ID and user

		if (!product) {
			return res
				.status(404)
				.json({ message: "Product not found or not authorized" });
		}

		await Product.findByIdAndDelete(id);
		res.status(200).json({ message: "Product deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	getProducts,
	getProduct,
	createProduct,
	updateProduct,
	deleteProduct,
};
