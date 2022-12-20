const express = require("express");
const { Liquid } = require('liquidjs')
const cors = require("cors");
const session = require('express-session')
const MongoStore = require('connect-mongo')
const parser = require('body-parser')
const db = require("./config/db");
const glob = require("./config/globals");
const student = require("./model/student");
const { trusted } = require("mongoose");
db();

const mode = glob("mode");
const port = glob("port") || 3000;
const app = express();
const engine = new Liquid()

app.engine('liquid', engine.express()) // register liquid engine
app.set('views', ['./pages/partials', './pages/views']) // specify the views directory
app.set('view engine', 'liquid') // set to default

app.use(express.json());
app.use(cors());
app.listen(port, (err) => {
    if (err) throw err;
    console.log(
        `Server running in ${mode} mode on port ${port} ${!err ? ", and no errors found" : err
        }`
    );
});
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
// app.use(express.json());
app.set("trust proxy", 1);
app.use(
    session({
        secret: "imgroot",
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: glob("db") }),
        cookie: { maxAge: 30 * 24 * 60 * 60 * 1000, secure: false },
    })
);

app.use(function (req, res, next) {
    res.locals.session = req.session
    res.locals.sessionID = req.sessionID
    next()
})
app.use("/", require("./routes/routes"));
app.use(express.static("public"));


// let s1 = new student({
//     email: "test@123",
//     password: "123456",
//     isFromEgypt: true,
//     admissionStatus: "NC",
//     provided: ["Military Education Programme", "High School Certificate"],
// });

// insert = s1.save();
// if (!insert) {
//     console.error("Oops! failed to save data...");
// } else {
//     console.log("Data seved successfully!");
// }

// exports.getStores = async (req, res, next) => {
//     try {
//         const stores = await Store.find();
//         return res.status(200).json({
//             success: true,
//             count: stores.length,
//             data: stores,
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Server error" });
//     }
// };
