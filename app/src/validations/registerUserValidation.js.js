const {check, body} = require("express-validator");
const db = require("../database/models");
const DB = db.Users;
const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

module.exports = [
    check("name")
        .notEmpty().withMessage("Debe ingresar su nombre y apellido").bail()
        .isLength({min: 2 }).withMessage("Debe contener un minimo de 2 cáracteres"),

    check("email")
        .notEmpty().withMessage("Ingrese un email").bail()
        .isEmail().withMessage("debe ingresar un email valido")
    ,
    body("email")
        .custom((value) => {

            return DB.findOne({
                where: {
                    email: value
                }
            })
            .then((user) => {
                if(user){
                    return Promise.reject()
                }
            })

            /* return user === undefined */
        }).withMessage("Email ya registrado")
    ,
    check("pass")
        .notEmpty().withMessage("debe ingresar una contraseña").bail()
        .isLength({ min: 8}).withMessage("La contraseña debe tener un minimo de 8 caracteres"),

    body("pass")
        .custom((value) => {
            return regExPass.test(value)
        })
            .withMessage("la contraseña deberá tener letras mayúsculas, minúsculas, un número y un carácter especial.")
    ,
    body("pass2")
        .custom((value, {req}) => value !== req.body.pass ? false : true)
        .withMessage("las contraseñas no coinciden")
    ,
    check("terms")
        .isString("on").withMessage("Debe aceptar los términos y condiciones")
]