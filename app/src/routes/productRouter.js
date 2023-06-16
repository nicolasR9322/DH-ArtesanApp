const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

// controller
const controller = require("../controllers/productController");
const checkUserInSession = require("../middlewares/checkUserInSession");
const { uploadImageProduct } = require("../middlewares/upload");
const productValidator = require("../validations/productValidator");


const checkAdmin = require("../middlewares/checkAdmin");

// route

//detail
router.get("/" ,productController.all)
router.get("/detail/:id" , productController.detail)


// create
router.get("/create",checkAdmin,controller.create)
router.post("/create",uploadImageProduct.single("image"),productValidator,checkUserInSession,controller.storage)

// edit
router.get("/edit/:id",checkAdmin, controller.edit)
router.put("/edit/:id",uploadImageProduct.single("image"),productValidator,checkUserInSession, controller.update)

//delete
router.delete('/delete/:id',checkAdmin, controller.destroy);


module.exports = router;