const {check, body} = require("express-validator");

module.exports = [
    check("name")
        .notEmpty().withMessage("Debe introducir un nombre").bail()
        .isLength({min:5}).withMessage("Debe contener como minimo 5 caracteres"),

    check("description")
        .notEmpty().withMessage("Debe introducir una descripcion").bail()
        .isLength({min:20}).withMessage("Debe contener minimo 20 caracteres"),

    check("price")
        .notEmpty().withMessage("Debe introducir un precio")
        .isInt({min:1}),
    
    check("category")
        .notEmpty().withMessage("Debe seleccionar una categoria")
]