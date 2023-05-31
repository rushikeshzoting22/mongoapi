const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Model = require("../model/model")


//POST CREATE
router.post('/create', async (req,res)=>{
    try {
        const newUser = new Model(req.body);
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).send(error);
    }
});

//GET READ
router.get('/get', async (req,res)=>{
    try {
        const users = await Model.find();
        res.json(users);
    } catch (error) {
        req.send(error);
    }
    
});
//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
      const data = await Model.findById(req.params.id);
      res.json(data)
    }
    catch (error) {
      res.status(500).json({ message: error.message })
    }
  })

//PUT UPDATE

router.put('/update/:id', async (req,res)=>{
    const updatedUser = await Model.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(updatedUser);
});
//DELETE  DELETE
router.delete('/delete/:id', async (req,res)=>{
    const deletedUser = await Model.findByIdAndDelete(req.params.id);
    res.json(deletedUser);
})

module.exports = router;