const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Please enter game name"],
		},

		year: {
			type: Number,
			required: true,
			default: 0,
		},

		price: {
			type: Number,
			required: true,
			default: 0,
		},

		publisher: {
			type: String,
			required: [true, "Please enter company name"],
		},

		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User", // Reference to the User model
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
