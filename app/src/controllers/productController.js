const {validationResult} = require("express-validator");
const db = require("../database/models");
const fs = require("fs");
const path = require("path");


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
        db.categories.findAll({

        })
        .then((categories) => {
            res.render("product-create",{
                session: req.session,
                categories
            })

        })
    },
    storage:(req,res) => {
        let data = req.body;
        let errors = validationResult(req);


        if(req.fileValidationError){
            errors.errors.push({
                value:"",
                msg: req.fileValidationError,
                param: "image",
                location:"file"
            })
           }
           if(!req.file){
            errors.errors.push({
                value:"",
                msg: "el producto debe tener una imagen",
                param: "image",
                location:"file"
            })
           }
        if(errors.isEmpty()){
            const database = db.products
    
            let newProduct = {
                name:data.name,
                description:data.description,
                image: req.file ? req.file.filename : "placeholder.png",
                category:data.category,
                price:data.price,
                categoriesId: data.category,
                discount: data.discount
            }
    
            database.create(newProduct)
                .then(() => {
    
                    res.redirect("/products")
                })

        } else {
            db.categories.findAll({

            })
            .then((categories) => {
                res.render("product-create",{
                    session: req.session,
                    categories,
                    errors: errors.mapped(),
                    old:req.body,
                })
    
            })
        }
        
    },
    edit: (req,res) => {

        const {id} = req.params

        const database = db.products
       
        const PRODUCTSALL = database.findByPk(id, {
                include: [
                    {
                        association: "categories"
                    }
                ]
            })
                
        const CATEGORIESALL = db.categories.findAll()
    
            Promise.all([PRODUCTSALL,CATEGORIESALL])
            .then(([PRODUCTSALL, CATEGORIESALL]) => {
                    res.render("product-edit", {
                        ...PRODUCTSALL.dataValues,
                        categories: CATEGORIESALL,
                        session: req.session,
                        old:req.body
                    })
                })

    },
    update:(req,res) => {
        const {id} = req.params;

        const database = db.products;

        let errors = validationResult(req);

        if(errors.isEmpty()){

        const PRODUCTFOUND =  database.findByPk(id);
        const CATEGORIESALL = db.categories.findAll();
        let productImage = PRODUCTFOUND.image

            Promise.all([PRODUCTFOUND,CATEGORIESALL])
            .then((PRODUCTFOUND,CATEGORIESALL) => {
                if(req.file){
                    fs.existsSync(`./public/images/products/${PRODUCTFOUND[0].image}`) && fs.unlinkSync(`./public/images/products/${PRODUCTFOUND[0].image}`)  
                }
                database.update({
                    ...PRODUCTFOUND.dataValues,
                    image: req.file ? req.file.filename : "placeholder.png",
                    categories: CATEGORIESALL
                }, {
                    where: {
                        id : id
                    }
                })
                .then(() => {
                    res.redirect("/products") 
                })
            })

        } else {
            if(req.fileValidationError){
                errors.errors.push({
                    value:"",
                    msg: req.fileValidationError,
                    param: "image",
                    location:"file"
                })
               }
               if(!req.file){
                errors.errors.push({
                    value:"",
                    msg: "el producto debe tener una imagen",
                    param: "image",
                    location:"file"
                })
               }

            const PRODUCTSALL = database.findByPk(id, {
                include: [
                    {
                        association: "categories"
                    }
                ]
            })
                
            const CATEGORIESALL = db.categories.findAll();

            Promise.all([PRODUCTSALL, CATEGORIESALL])
                .then(([PRODUCTSALL, CATEGORIESALL]) => {
                    res.render("product-edit",{
                        ...PRODUCTSALL.dataValues,
                        categories: CATEGORIESALL,
                        session: req.session,
                        old:req.body,
                        errors: errors.mapped(),
                    })
            })
        }

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