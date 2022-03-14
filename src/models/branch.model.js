const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
    name:{type: String, required: true},
    address:{type: String, required: true},
    IFSC: {type: String, required: true},
    MICR: {type: Number, required: true},
},{
    timestamps: true,
    versionKey: false
})

const BranchDetail = mongoose.model("BranchDetail", branchSchema);

module.exports = BranchDetail;