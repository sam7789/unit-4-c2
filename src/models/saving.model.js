const mongoose = require('mongoose');

const savingSchema = new mongoose.Schema({
    account_number: {type: Number, required: true, unique: true},
    balance:{type: Number, required: true},
    interestRate: {type: Number, required: true},
    masterId: {type:mongoose.Schema.Types.ObjectId, ref: "MasterAccount", required:true}
},{
    timestamps: true
});

const SavingsAccount = mongoose.model("SavingAccount",savingSchema);

module.exports= SavingsAccount;