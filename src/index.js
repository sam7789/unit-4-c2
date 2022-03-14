const express = require('express');
const app = express();

app.use(express.json());

const userController = require("./contollers/user.controller");

const brachController = require("./contollers/branch.controller");

const masterController = require("./contollers/master.controller");

const savingController = require("./contollers/saving.controller");

const fixedController = require("./contollers/fixed.controller");

app.use("/users",userController);

app.use("/branches",brachController);

module.exports  = app;





