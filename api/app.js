const express = require("express");
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const cors = require("cors");

const CharacterRoutes = require("./src/Routes/index");

require('./db.js');

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());

app.use("/", CharacterRoutes)

module.exports = app;