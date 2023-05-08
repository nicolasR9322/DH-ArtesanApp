module.exports = (req, res, next) => req.session.user && (rolId === 1) ? next() : res.render("404", {
    error: "quisiste entrar a una ruta prohibida"
});