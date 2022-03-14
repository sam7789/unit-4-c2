const mongoose = require('mongoose');

const fixedSchema = new mongoose.Schema({
    account_number: {type: Number, required: true, unique: true},
    balance: {type: Number, required: true},
    interestRate: {type: Number, required: true},
    startDate:{type: Date, required: true},
    maturityDate:{type: Date, required: true},
    masterId: {type:mongoose.Schema.Types.ObjectId, ref: "MasterAccount", required:true}
},{
    timestamps: true
});

const FixedAccount = mongoose.model("FixedAccount", fixedSchema);

module.exports = FixedAccount;