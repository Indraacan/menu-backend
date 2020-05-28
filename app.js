var express = require("express");
var path = require("path");
const bodyParser = require ('body-parser')
const cors = require ('cors')

var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require ('mongoose')
require ("dotenv").config();

var indexRouter = require("./routes/index");
const menuRouter = require("./routes/Menu");
const usersRouter = require("./routes/users");
const categoryRouter = require ("./routes/Category")
var app = express();
mongodConnect = process.env.DB_LOCAL
mongoose.connect(mongodConnect, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors())
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public", express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/menu", menuRouter);
app.use("/category", categoryRouter)

module.exports = app;
