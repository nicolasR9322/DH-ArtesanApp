const db = require("../database/models")
const {Op} = require("sequelize");


module.exports = mtd = {
    getOrder: async ({userId}) => {

        if(!userId){
            throw{
                ok: false,
                message: "debes ingresar un id"
            }
        }

        const [order] =  await db.order.findOrCreate({
            where: {
                [Op.and] : [
                    {
                        userId
                    },
                    {
                        status: "pending"
                    }
                ]
            },
            defaults: {
                userId,
            },
            include : [
                {
                association:'carts',
                through: {
                    attributes: ["quantity"]
                }
                },
            ],
            });
            return order
        },
    createProductInCart: async (userId,productId) => {
        if(!userId || productId){
            throw {
                ok: false,
                message: "debes introducir un producto o usuario"
            }
        }
        const order = await mtd.getOrder({userId});

        await mtd.createCart({orderId: order.id, productId})
    },
    createCart: async ({orderId, productId}) => {
        return db.cart.create({orderId, productId})
    },
}