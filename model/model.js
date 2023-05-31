const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number
},{timestamps:true});

const model = mongoose.model("User",userSchema)
module.exports = model;