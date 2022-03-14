const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb+srv://sam7789:<password>@cluster0.omfqq.mongodb.net/evaluation?retryWrites=true&w=majority");
};
module.exports = connect;