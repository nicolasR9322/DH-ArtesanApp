const path = require("path");
const db = require("../database/models");

module.exports = {
    cart: (req, res) => {
        return res.send(req.session)
        res.render("productCart",{
            
            session: req.session
        })
    },
}