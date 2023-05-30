const multer = require("multer");
const path = require("path");

const storeImageProduct = multer.diskStorage({
    destination: (req,file,cb) => {
        return cb(null, "public/images/products")
    },
    filename:(req,file,cb) => {
        return cb(null,`${Date.now()}_products_${path.extname(file.originalname)}`)
    }
});

const uploadImageProduct = multer({
    storage: storeImageProduct,
    fileFilter: (req,file,cb) => {
        if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
             req.fileValidationError = "No es un tipo valido de imagen soportado";
             return cb(null,false, req.fileValidationError);
        }
        cb(null,true);
    }
});

module.exports = {
    uploadImageProduct
}