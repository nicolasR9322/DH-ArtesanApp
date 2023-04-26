
const {validationResult} = require("express-validator");
const db = require("../database/models");

module.exports = {
    index:(req,res) => {
 
        const databases1 = db.Users.findAll({

        })
        .then((data1) => {
            const databases2 = db.products.findAll({
            })
            .then((data2) => {
                res.render("adminIndex",{
                    userDB: data1.Users,
                    productsDB: data2.Products,
                    session:req.session
                })
            })
        })
    },
    products:(req,res) => {
        const data = db.products.findAll({

        })
        .then((data) => {
            
            res.render("adminProducts", {
                productsDB: data
            })
        })

    },
    productsAdd: (req,res) => {
        res.render("adminCreate",{
            session:req.session
        })
    },
    productsStore:(req,res) => {
        const {name, description,category,color,price} = req.body
        let database = readJSON("products.json")

        let newProduct = {
            id:database.length ? database[database.length - 1].id + 1 : 1,
            name:name,
            description:description,
            image: req.file ? req.file.filename : "placeholder.png",
            category:category,
            color:color,
            price:price,
        }

        database.push(newProduct)

        writeJSON("products.json",database)
        res.redirect("/admin/products")
    },
    productsDetail: (req,res) => {
        let id = +req.params.id
        let productsDB = readJSON("products.json");

        let productFound = productsDB.find(x => x.id === id);

        res.render("adminDetail", {
            product: productFound,
            session:req.session
        })
    },
    productEdit:(req,res) => {
        let id = +req.params.id;
        const database = readJSON("products.json");

        const {name, description,category,color,price} = req.body

        let mas = database.map(x => {
            if(id === x.id){
                x.name = name;
				x.description = description;
				x.image = req.file ? req.file.filename : x.image
				x.category = category;
				x.color = color;
				x.price = price;
            } 
        });
        writeJSON("products.json", database);

        res.redirect("/admin/products") 
    },
    productDelete:(req,res) => {
        const userId = req.params.id;
        let userDB = readJSON("products.json");

        let user = userDB.find(user => user.id === userId);

        userDB.pop(user);

        writeJSON("products.json", userDB);

        res.redirect("/admin/products")
    },
    loggedOut:(req,res) => {
        req.session.destroy();
        if(req.cookies.userArtesanApp){
            res.cookie("userArtesanApp","",{maxAge:-1})
        }
        res.redirect("/admin/products")
    },
}