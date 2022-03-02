
const express = require("express");
const cors = require('cors');
const app = express();
require("./database/mongoose");
app.use(cors());
app.options('*', cors());
const userRouter = require("./routers/user");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRouter);




module.exports = app;