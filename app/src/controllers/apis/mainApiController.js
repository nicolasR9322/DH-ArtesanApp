const { getOneProduct, getAllProducts } = require("../../services/mainService");


module.exports = {
    list: async (req,res) => {
        try {
            const products = await getAllProducts();
            let categoriesOne = (categoryArray, categoryNumber)  =>
            {
                categoryArray = [];
                for (let i = 0; i < products.length; i++) {
                const element = products[i];
                element.categoriesId === categoryNumber ? categoryArray.push(element) : "";
                }
                return categoryArray;
            }


         
           
            return res.status(200).json({
                
                ok:true,
                total : products.length,
                countByCategory: {
                Comida : categoriesOne("Comida", 1).length,
                Artesanias : categoriesOne("Artesanias", 2).length,
                Pinturas: categoriesOne("Pinturas", 3).length,
                Esculturas: categoriesOne("Esculturas", 4).length,
                Ropa: categoriesOne("Ropa", 5).length
                },
                url : "/api/products",
                products: products,
            })
        } catch (error) {
            console.log(error);
        return res.status(error.status || 500).json({
            ok:false,
            error : {
                status : error.status || 500,
                message : error.message || "ha ocurrido un error"
            }
            })
        }
    },
    detail : async (req,res ) => {

        try {
            let id = req.params.id
            const OneProduct = await getOneProduct(id);
                
            return res.status(200).json({
                ok:true,
                url : `/api/products/${id}`,
                profile: `http://localhost:3030/images/products/${OneProduct.image}`,
                data : OneProduct
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
            ok:false,
            error : {
                status : error.status || 500,
                message : error.message || "ha ocurrido un error"
            }
            })
        }
        
    }
}