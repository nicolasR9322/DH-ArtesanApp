const {check, body} = require("express-validator");
const db = require("../database/models");
const DB = db.Users;

module.exports = [
    check("name")
        .notEmpty().withMessage("Debe ingresar su nombre y apellido").bail(),

    check("email")
        .notEmpty().withMessage("Debe ingresar su email").bail()
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
        .isLength({ min: 6 , max:10}).withMessage("La contraseña debe tener un minimo de 6 y un maximo de 10")
    ,
    body("pass2")
        .custom((value, {req}) => value !== req.body.pass ? false : true)
        .withMessage("las contraseñas no coinciden")
    ,
    check("terms")
        .isString("on").withMessage("Debe aceptar los términos y condiciones")
]