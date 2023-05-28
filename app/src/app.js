const express = require("express");
const app = express();
const PORT = 3030;
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cookies = require("./middlewares/cookies");

//Template engines
app.set("view engine","ejs")
app.set("views", ["./src/views", "./src/views/users" ,"./src/views/products","./src/views/admin"]);

// public
app.use(express.static("public"));

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(session({
    secret: "ArtesanApp",
    resave: false,
    saveUninitialized:true
}))
app.use(cookieParser());
app.use(cookies);
app.use(express.json());

// routers
const indexRouter = require("./routes/indexRouter");
const productRouter = require("./routes/productRouter");
const usersRouter = require("./routes/usersRouter");
const cartRouter = require("./routes/cartRouter");
const adminRouter = require("./routes/admin");

// apis routes
const mainApi = require("./routes/apis/main");
const userAPI = require("./routes/apis/userAPI")

// views
app.use("/", indexRouter);
app.use("/productCart", cartRouter);
app.use("/products", productRouter);
app.use("/results", indexRouter);
app.use("/users", usersRouter);
app.use("/admin", adminRouter);

// api

app.use("/api", mainApi);
app.use("/api", userAPI)

// catch error

app.use((req, res, next) => next(createError(404)));
app.use((err,req,res,next) => {

    res.status(err.status || 500);
    res.render("404", {
        error: "esta ruta no existe"
    });
})
// port
app.listen(PORT, () => console.log(`servidor levantando en puerto : ${PORT}\n http://localhost:${PORT}`))