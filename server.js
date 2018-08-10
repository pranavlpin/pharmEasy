var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var allRoutes = require("./routes/allRoutes");
const hbs = require("hbs");
var http = require("http");
var cors = require("cors");

//connecting to mongoLab test database
mongoose.connect('mongodb://pranav:pranav1234@ds141766.mlab.com:41766/madeye');
//Handle uncaught exceptions
process.on("uncaughtException", function (error) {
    console.log(error.stack);
    console.log("Node NOT Exiting...");
});
//Create Express applications
var app = express();
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(cors()); //for cross browser comm
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(cookieParser());
app.use(express.static(__dirname + "/public"));
// Use environment defined port or 3000
var port = process.env.PORT || 3000;
//create express router
var router = express.Router();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
    //res.send("Hello World");
});
//Logging each API request on console
router.use(function (req, res, next) {
    // log each request to the console
    console.log("RouteLog>>" + req.method, req.url);

    var now = new Date().toString();
    var log = `${now}:${req.method}=>${req.url} \nBody:${JSON.stringify(
      req.body
    )} \nHeader:${JSON.stringify(req.headers.authorization)}\n\n`;
    next();
});

//Register your routes with the API
app.use("", router);
app.use("", allRoutes);

//Start listening
app.listen(port, () => console.log('Server listening on port 3000!'))