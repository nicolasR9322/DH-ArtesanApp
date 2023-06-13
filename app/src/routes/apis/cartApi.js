const express = require("express");
const { 
    getOrderPending, 
    addProduct, 
    removeProduct, 
    moreQuantity, 
    lessQuantity, 
    clearCart, 
    statusOrder } = require("../../controllers/apis/cartController");
const router = express.Router();

// llego con /api

router
    .get("/getOrderPending", getOrderPending)
    .post("/addProduct", addProduct)
    .delete("/removeProduct", removeProduct)
    .put("/moreQuantity", moreQuantity)
    .put("/lessQuantity", lessQuantity)
    .delete("/clearCart", clearCart)
    .put("/statusOrder", statusOrder)


module.exports = router;