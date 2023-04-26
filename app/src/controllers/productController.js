const db = require("../database/models");

module.exports = {
    all: (req,res) => {

        const database = db.products.findAll({

        })
        .then((database) => {
            
            res.render("products",{
                database,
                session: req.session
            })
        })

    },
    detail: (req, res) => {
    
        const {id} = req.params

        const product = db.products.findByPk(id)
        .then((producto) => {
            return res.render("productDetail", {
                ...producto.dataValues,
                session: req.session
            });
        })

    },

    create:(req,res) => {
        res.render("product-create",{
            session: req.session
        })
    },
    storage:(req,res) => {
        let data = req.body;

        const database = db.products

        let newProduct = {
            name:data.name,
            description:data.description,
            image: req.file ? req.file.filename : "placeholder.png",
            category:data.category,
            price:data.price,
            categoriesId: 1
        }

        database.create(newProduct)
            .then(() => {

                res.redirect("/products")
            })

    },
    edit: (req,res) => {

        const {id} = req.params

        const database = db.products

        let data = database.findByPk(id, {
            include: [
                {
                    association: "categories"
                }
            ]
        })
            .then((product) => {
                res.render("product-edit", {
                    ...product.dataValues,
                    category: product.categories.name,
                    color: "red",
                    session: req.session
                })
            })

    },
    update:(req,res) => {
        const {id} = req.params;

        const database = db.products;

        let {name,description,price} = req.body;

        database.findByPk(id)
            .then((product) => {
                
                database.update({
                    name,
                    description,
                    discount: 10,
                    image: req.file ? req.file.filename : product.image,
                    category:1,
                    price,
                    categoriesId: 1
                }, {
                    where: {
                        id : id
                    }
                })
                .then(() => {
                    res.redirect("/products") 
                })
            })

                        



    },
    
 // DELETE
	destroy : (req, res) => {

		let productId = +req.params.id;

        const database = db.products;

        database.destroy({
            where : {
                id : productId
            },
            force: true
        })
        .then(() => {

            return res.redirect("/products");
        })

	
	},
    
    
}