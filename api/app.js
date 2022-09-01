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
app.use((req, res, next) => {
  res.header(key = 'Access-Control-Allow-Origin', value = '*'); // solucion del cors
  res.header(key = 'Access-Control-Allow-Credentials', value = 'true');
  res.header(key = 'Access-Control-Allow-Headers', value = 'Origin, X-Requested-With, Content-Type, Accept');
  res.header(key = 'Access-Control-Allow-Methods', value = 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use("/", CharacterRoutes)

module.exports = app;