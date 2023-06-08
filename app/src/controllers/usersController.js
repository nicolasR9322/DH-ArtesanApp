const {validationResult} = require("express-validator");
const db = require("../database/models");
const fs = require("fs");
const path = require("path");

module.exports = {
    register: (req, res) => {
            res.render("register", {
                session: req.session
        })
    },
    login: (req, res) => {
        if(req.session.user != undefined){
            res.redirect("index", {
                session: req.session
            })
        } else {
            res.render("login")
        }
        
    },
    loggedIn: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            let user = db.Users.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then((user) => {
                req.session.user = {
                    id:user.id,
                    name:user.name,
                    email:user.email,
                    pass:user.pass,
                    avatar:user.avatar,
                    recordar:user.recordar,
                    rol:user.rolId
                }

                let cookieLife = new Date(Date.now() + 60000); 
    
                if(req.body.recordar){
                    res.cookie("userArtesanApp",
                    req.session.user,
                    {
                        expires:cookieLife,
                        httpOnly: true
                    })
                }
    
                res.locals.user = req.session.user
    
                res.redirect("/")
            })
        } else {
            res.render("login", {
                errors: errors.mapped(),
                session:req.session
            })
        }
    },
    loggedOut:(req,res) => {
        req.session.destroy();
        if(req.cookies.userArtesanApp){
            res.cookie("userArtesanApp","",{maxAge:-1})
        }
        res.redirect("/")
    },
    storeUser: (req,res) => {
       let data = req.body;
       const database = db.Users;
       let errors = validationResult(req);


       if(req.fileValidationError){
        errors.errors.push({
            value:"",
            msg: req.fileValidationError,
            param: "avatar",
            location:"file"
        })
       }
       if(!req.file){
        errors.errors.push({
            value:"",
            msg: "el usuario debe tener una imagen",
            param: "avatar",
            location:"file"
        })
       }

       if (errors.isEmpty()) {
           let newUser = {
               name:data.name,
               email:data.email,
               pass:data.pass,
               avatar: req.file ? req.file.filename : "default-image.png",
               rolId: 2
           };

           database.create(newUser)
            .then(() => {
                return res.redirect("login");
            })

       } else {
        return res.render("register", {
            errors: errors.mapped(),
            old: req.body,
            session:req.session
        })
       }
    },
    showProfile:(req,res) => {
        
        if(req.session.user){

            let userId = req.session.user.id;
    
            const database = db.Users;
    
            let data = database.findByPk(userId, {
                include: ["rol"]
            })
                .then((user) => {
                    res.render("users/showProfile",{
                        session:req.session,
                        ...user.dataValues
                    })
                })
        } else {
            res.redirect("/")
        }

    },
    profile: (req,res) => {
        let userId = req.session.user.id;

        const database = db.Users

        let data = database.findByPk(userId)
            .then((user) => {
                
                res.render("userProfile", {
                    session:req.session,
                    ...user.dataValues
                })
            })
    },
    updateProfile: (req,res) => {
        let userDB = db.Users;
        let errors = validationResult(req);
        let userId = req.session.user.id;
        
        if(req.fileValidationError){
            errors.errors.push({
                value:"",
                msg: req.fileValidationError,
                param: "avatar",
                location:"file"
            })
           }
           if(!req.file){
            errors.errors.push({
                value:"",
                msg: "el usuario debe tener una imagen",
                param: "avatar",
                location:"file"
            })
           }


        if(errors.isEmpty()){
            const {name,pass} = req.body;

            
            let users = userDB.findByPk(userId)
            .then((user) => {
                if(req.file){
                    fs.existsSync(`./public/images/avatar/${user.avatar}`) && fs.unlinkSync(`./public/images/avatar/${user.avatar}`)  
                }
                userDB.update({
                     name,
                     pass,
                     avatar: req.file ? req.file.filename : "default-image.png"
                    },{
                        where:{
                            id: userId
                        }
                    }, {
                })
                .then(() => {
                    
                    delete user.pass;
                    
                    req.session.user = user
                    
                    return res.redirect("/users/showProfile")
                })
            })
        }else {
        let userId = req.session.user.id;

        const database = db.Users

        let data = database.findByPk(userId)
            .then((user) => {
                return res.send(errors)
                res.render("userProfile", {
                    session:req.session,
                    ...user.dataValues,
                    errors:errors.mapped(),
                    old:req.body
                })
            })
        }

    },
    deleteProfile:(req,res) => {
        const userId = req.session.user.id;
        const database = db.Users;

        database.destroy({
            where: {
                id: userId
            },
            force:true
        })
        .then((user) => {

            req.session.destroy()
            res.redirect("/")
        })


    }
}