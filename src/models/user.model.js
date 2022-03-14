const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    middleName: {type: String, required: false},
    lastName: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true, unique: true},
    address: {type: String, required: true},
    gender: {type: String, required: true},
    type : {type: String, required: false},
},{
    timestamps: true,
    versionKey: false
});

const User = mongoose.model("User", userSchema);

module.exports = User;