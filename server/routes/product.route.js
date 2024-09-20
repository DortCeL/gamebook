const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
	getProducts,
	getProduct,
	createProduct,
	updateProduct,
	deleteProduct,
} = require("../controllers/product.controller.js");
const authMiddleware = require("../middleware/authMiddleware.js");

router.get("/", authMiddleware, getProducts);
router.get("/:id", getProduct);

router.post("/", authMiddleware, createProduct);

// update a product
router.put("/:id", authMiddleware, updateProduct);

// delete a product
router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;
