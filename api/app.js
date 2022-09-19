const express = require("express");
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const cors = require("cors");

const CharacterRoutes = require("./src/Routes/index");

require('./db.js');

const app = express();

app.use(cors());
app.setHeader("Access-Control-Allow-Origin", "*");
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/", CharacterRoutes)

module.exports = app;