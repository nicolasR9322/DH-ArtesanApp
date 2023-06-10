const router = require("express").Router();
const { loginGoogle } = require("../controllers/authController");
const passport = require("passport");


passport.serializeUser((user,done) => done(null,user));
passport.deserializeUser((user,done) => done(null,user));

router
    .get("/login/google", passport.authenticate("google"))
    .get("/google/callback", passport.authenticate("google", {failureRedirect: "/users/login"}), loginGoogle)
module.exports = router