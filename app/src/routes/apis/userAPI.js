const express = require("express");
const userAPIController = require("../../controllers/apis/userAPIController");
const router = express.Router();
// llego con /api

router.get("/users", userAPIController.list);
router.get("/users/:id", userAPIController.getOne);

module.exports = router;