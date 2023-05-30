const db = require("../database/models");

module.exports = {
    getAllProducts : async () => {
        try {
            const products = await db.products.findAll({
                include: [
                    {
                        association: "categories"
                    },
                    
                ],
            })
            let productsURL = products.map(product => ({
                ...product.toJSON(),
                url: `/api/products/${product.id}`
            }));

            return productsURL
        } catch (error) {
            console.log(error);
            throw {
                status: 500, 
                message: error.message 
            }
        }
        
    },
    getOneProduct: async (id) => {
        try {
            const OneProduct = db.products.findByPk(id, {
                include: [
                    {
                        association: "categories"
                    }
                ]
            });

            return OneProduct;
        } catch (error) {
            console.log(error);
            throw {
                status: 500, 
                message: error.message 
            }
        }
    }
}