const express = require("express");
const indexController = require("../controllers/indexController");
const router = express.Router();

// route
router.get("/" , indexController.index);
router.get("/about" , indexController.about);
//search
router.get("/search", indexController.search)
router.get("/searchByCategory/:id", indexController.searchByCategory)

module.exports = router;