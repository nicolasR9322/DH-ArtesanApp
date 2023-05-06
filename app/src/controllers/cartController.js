const path = require("path");
const db = require("../database/models");

module.exports = {
    cart: (req, res) => {
        res.render("productCart",{
            
            session: req.session
        })
    },
}