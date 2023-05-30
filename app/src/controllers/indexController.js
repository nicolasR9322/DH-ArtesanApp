const db = require("../database/models");
const { Op } = require("sequelize");

module.exports = {
    index: (req, res) => {
        let allProducts = db.products.findAll({
            include: ["categories"]
        })
            .then((product) => {
                res.render("index", {
                    product: product,
                    session: req.session
                })
            })
    },
    search: (req, res) => {
        let {productSearch} = req.query


        const searchResult = db.products.findAll({
            where: {
                name: {
                    [Op.like]: `%${productSearch}%`
                }
            },
        })
        .then((searchResult) => {
            res.render("search",{
                 productSearch,
                 searchResult,
                 session: req.session
             });
        })
    

    },
  
    about: (req, res) => {
        res.render("nosotros", {
            session: req.session
        })
    }
}