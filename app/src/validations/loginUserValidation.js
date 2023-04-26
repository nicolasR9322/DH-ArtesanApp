const {check,body} = require("express-validator");
const db = require("../database/models");
const DB = db.Users;

module.exports = [
    check("email")
        .notEmpty().withMessage("Debe ingresar su email").bail()
        .isEmail().withMessage("debe ingresar un email valido")
    ,
    body("email")
    .custom((value, {req}) => {

        //let user = usersDB.find(user => user.email === value);

        return DB.findOne({
            where: {
                email: req.body.email
            }
        })
            .then((data) => {
                if(!data){
                    return Promise.reject()
                }
            })

    })
    .withMessage("Email no registrado")
    ,
    check("pass")
        .notEmpty().withMessage("debe ingresar una contraseña").bail()
        .isLength({ min: 6 , max:10}).withMessage("La contraseña debe tener un minimo de 6 y un maximo de 10")
    ,

     body("pass")
    .custom((value, { req }) => {

        //let user = usersDB.find(user => user.email === req.body.email);

        return DB.findOne({
            where: {
                pass: req.body.pass
            }
        })
            .then((data) => {
                if(!data){
                    return Promise.reject()
                }
            })

        /* return bcrypt.compareSync(value, user.pass);  
        return (value === db.Users.pass); */
    })
    .withMessage("Contraseña inválida")
    
]