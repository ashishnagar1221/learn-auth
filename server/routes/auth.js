const express = require("express");
const router = express.Router();
const { signUp } = require("../controllers/auth");

router.get("/signup", signUp);

module.exports = router;
