const mongoose = require("mongoose");

const masterSchema = new mongoose.Schema({
    balance: {type: Number,required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    branchId: {type: mongoose.Schema.Types.ObjectId, ref: "BranchDetail", required: true}
},{
    timestamps: true
});

const MasterAccount = mongoose.model("MasterAccount",masterSchema);
module.exports= MasterAccount;