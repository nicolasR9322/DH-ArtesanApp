const { getOneProduct, getAllProducts } = require("../../services/mainService");


module.exports = {
    list: async (req,res) => {
        try {
            const products = await getAllProducts();
console.log(req.query)
            let categoriesOne = (categoryArray, categoryNumber)  =>
            {
                categoryArray = [];
                for (let i = 0; i < products.length; i++) {
                const element = products[i];
                element.categoriesId === categoryNumber ? categoryArray.push(element) : "";
                }
                return categoryArray;
            }


            
            let paginacion = (condicion) => {
                if(condicion === "sumar"){
                    return  + 10;
                } else if( condicion === "restar"){
                    return  - 10;
                }
            }
            return res.status(200).json({
                
                ok:true,
                total : products.length,
                countByCategory: {
                One : categoriesOne("One", 1).length,
                two : categoriesOne("two", 2).length,
                three: categoriesOne("three", 3).length
                },
                url : "/api/products",
                next:  `${paginacion("sumar")}`,
                data: products,
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