const express = require("express");
const router = express.Router();

// controller
const controller = require("../controllers/cartController.js")
const checkAdmin = require("../middlewares/checkAdmin");
// middlewares
const checkSession = require("../middlewares/checkUserInSession");

// route
router.get("/",checkAdmin,controller.cart)

module.exports = router;