const express = require("express");
const router = express.Router();
const { uploadImageAvatar } = require("../middlewares/uploadAvatar");

// controller
const {login, register, storeUser, loggedIn, profile, updateProfile, deleteProfile, showProfile, loggedOut} = require("../controllers/usersController");

// middlewares

const registerUserValidation = require("../validations/registerUserValidation.js");
const checkSession = require("../middlewares/checkUserInSession");
const checkUserNormal = require("../middlewares/checkUserNormal");
const loginUserValidation = require("../validations/loginUserValidation");
const updateProfileValidation = require("../validations/updateProfileValidation");


// Login
router.get("/login", checkUserNormal,login);
router.post("/login",checkUserNormal,loginUserValidation, loggedIn);
// Register
router.get("/register" ,checkUserNormal, register)
router.post("/register",uploadImageAvatar.single("avatar") ,checkUserNormal, registerUserValidation,storeUser)

// show profile
router.get("/showProfile",checkSession, showProfile)

// show profile edit
router.get("/profile",checkSession ,profile)

// update profile
router.put("/update",uploadImageAvatar.single("avatar"),updateProfileValidation,checkSession ,updateProfile)

// delete profile
router.delete("/delete/:id", checkSession,deleteProfile)


// destroy cookie
router.post("/destroy", loggedOut);
module.exports = router;