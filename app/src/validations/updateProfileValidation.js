const {check, body} = require("express-validator");
const db = require("../database/models");
const DB = db.Users;
const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

module.exports = [
    check("name")
        .notEmpty().withMessage("Debe ingresar su nombre y apellido").bail()
        .isLength({min: 2 }).withMessage("Debe contener un minimo de 2 cáracteres"),
    check("pass")
        .notEmpty().withMessage("debe ingresar una contraseña").bail()
        .isLength({ min: 8}).withMessage("La contraseña debe tener un minimo de 8 caracteres"),

]