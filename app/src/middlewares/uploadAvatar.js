const multer = require("multer");
const path = require("path");

const storeImageAvatar = multer.diskStorage({
    destination: (req,file,cb) => {
        return cb(null, "public/images/avatar")
    },
    filename:(req,file,cb) => {
        return cb(null,`${Date.now()}_avatar_${path.extname(file.originalname)}`)
    }
});

const uploadImageAvatar = multer({
    storage: storeImageAvatar,
    fileFilter: (req,file,cb) => {
        if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
             req.fileValidationError = "No es un tipo valido de imagen soportado";
             return cb(null,false, req.fileValidationError);
        }
        cb(null,true);
    }
});

module.exports = {
    uploadImageAvatar
}