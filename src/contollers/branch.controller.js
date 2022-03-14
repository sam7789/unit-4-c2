const express = require("express");

const Branch = require("../models/branch.model");
const router = express.Router();

router.get("", async (req,res)=>{
    try {
        const users = await Branch.find().lean().exec();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.post("", async (req,res)=>{
    try {
        const branch = await Branch.create(req.body);

        return res.status(201).send(branch);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get("/:id", async (req,res)=>{
    try {
        const branch = await Branch.findById(req.params.id).lean().exec();

        return res.status(200).send(branch);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.patch("/:id", async (req,res)=>{
    try {
        const branch = await Branch.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
        }).lean().exec();
        return res.status(201).send(branch);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.delete("./id",async (req,res)=>{
    try {
        const branch = await Branch.findByIdAndDelete(req.params.id);

        return res.status(201).send(branch);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

module.exports = router;