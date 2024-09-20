const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const authRoute = require("./routes/auth.routes.js");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/api/products", productRoute);
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
	res.send("Hello from Node API Server Updated");
});

app.get("/jwt-decode", (req, res) => {});

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("Connected to database!");
		app.listen(3000, () => {
			console.log("Server is running on port 3000");
		});
	})
	.catch(() => {
		console.log("Connection failed!");
	});
