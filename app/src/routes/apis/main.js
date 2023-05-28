const express = require("express");
const mainApiController = require("../../controllers/apis/mainApiController");
const router = express.Router();

// llego con /api

router.get("/products", mainApiController.list);
router.get("/products/:id", mainApiController.detail);

module.exports = router;