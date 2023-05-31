const db = require("../database/models");
const { Op } = require("sequelize");

module.exports = {
    index: async (req, res) => {


        const allProducts = await db.products.findAll({
            include: ["categories"],
            limit: 10
        });

        const categories = await db.categories.findAll();
        
        const lastetProducts = await db.products.findAll({
            include: ["categories"],
            order: [["id", "DESC"]],
            limit: 5
        });
        
        const inSaleProducts = await db.products.findAll({
            include: ["categories"],
            order:[["discount", "DESC"]],
            limit: 10
        });


        const productsByCategory = await db.products.findAll({
            include: ["categories"],
        });
            
            let categoriesOne = (categoryArray, categoryNumber)  =>
            {
                categoryArray = [];
                for (let i = 0; i < productsByCategory.length; i++) {
                const element = productsByCategory[i];
                element.categoriesId === categoryNumber ? categoryArray.push(element) : "";
                }
                return categoryArray;
            }

            let comidas = categoriesOne("comidas",1);
            console.log(comidas)
            let artesanias
            let pinturas
            let esculturas


        Promise.all([allProducts,categories,lastetProducts,inSaleProducts])
        .then(([allProducts, categories, lastetProducts, inSaleProducts]) => {
            res.render("index", {
                product: allProducts,
                categories,
                latest : lastetProducts,
                sales: inSaleProducts, 
                session: req.session,
            })
        })
    },
    search: (req, res) => {
        let {productSearch} = req.query




        const searchResult = db.products.findAll({
            where: {
                [Op.or] : [
                {name: {[Op.like]: `%${productSearch}%`}},
                {categoriesId: {[Op.eq] : `${productSearch}`}}
                ]
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