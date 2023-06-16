const db = require("../database/models");
const { Op, Sequelize } = require("sequelize");

module.exports = {
    index: async (req, res) => {
        console.log(req.session.user)
        const allProducts = await db.products.findAll({
            include: ["categories"],
            order: Sequelize.literal("rand()"),
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

        const banner = await db.SliderBanner.findAll();
        console.log(banner.length)            
            let categoriesOne = (categoryArray, categoryNumber)  =>
            {
                categoryArray = [];
                for (let i = 0; i < productsByCategory.length; i++) {
                const element = productsByCategory[i];
                element.categoriesId === categoryNumber ? categoryArray.push(element) : "";
                }
                return categoryArray;
            }

        Promise.all([allProducts,categories,lastetProducts,inSaleProducts,banner])
        .then(([allProducts, categories, lastetProducts, inSaleProducts,banner]) => {
            res.render("index", {
                product: allProducts,
                categories,
                latest : lastetProducts,
                sales: inSaleProducts,
                banner,
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
    searchByCategory : (req,res) => {
        let {id} = req.params
        
        const searchResult = db.products.findAll({
            where: {
                categoriesId: {[Op.eq] : `${id}`}
            },
        })
        .then((searchResult) => {
            res.render("search",{
                 productSearch: `categoria ${id}`,
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