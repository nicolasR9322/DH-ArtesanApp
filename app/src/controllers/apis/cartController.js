const {Op} = require("sequelize");
const db = require("../../database/models");
const { getOrder, createProductInCart } = require("../../services/cartService");
const sendSucessResponse = require("../../helpers/sendSucessResponse");
const sendErrorResponse = require("../../helpers/sendErrorResponse");

module.exports = {
    getOrderPending: async (req,res) => {
        // const {id} = req.session.user;
        try {
            // const {userId : id} = req.body;
            
            const order = await getOrder({userId: 101})

            sendSucessResponse(res, {data:order});
        } catch (error) {
            console.log(error)
            sendErrorResponse(res,error)
        }
        
    },
    addProduct: async (req,res) => {
        try {
            const {productId} = req.body;
            // const {id} = req.session.user
            await createProductInCart({userId:101,productId});
            sendSucessResponse(res);
        } catch (error) {
            sendErrorResponse(res,error)
        }

    },
    removeProduct: (req,res) => {
        
    },
    moreQuantity: (req,res) => {
        
    },
    lessQuantity: (req,res) => {
        
    },
    lessQuantity: (req,res) => {
        
    },
    clearCart: (req,res) => {
        
    },
    statusOrder: (req,res) => {
        
    },
    
    
}