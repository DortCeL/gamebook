const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/auth.controller");

// Auth Routes
router.post("/signup", registerUser);
router.post("/login", loginUser);

module.exports = router;
