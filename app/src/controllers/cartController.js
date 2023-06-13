const path = require("path");
const db = require("../database/models");

module.exports = {
    cart: async (req, res) => {
        const cartProducts = await db.products.findAll({
            limit:5
        });

        /* const product = await db.products.findOne({
            where: {
                categoriesId : 2
            }
        }); */
        
        const others = await db.products.findAll({
            limit: 5
        });

        let definitivePrice = cartProducts;


        Promise.all([cartProducts,others,definitivePrice])
            .then(([cartProducts, others,definitivePrice]) => {

                let sums = 0
                for (let i = 0; i < definitivePrice.length; i++) {
                    const element = definitivePrice[i].price;
                    sums = sums + definitivePrice[i].price
                }


                res.render("productCart",{
                    cartProducts,
                    others,
                    definitivePrice: sums,
                    session: req.session
                })
            })
    },
}