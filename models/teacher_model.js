const express = require("express");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: String,
    email:{type : String , required:true, unique:true},
    password: String,
    cpassword: String,
});


// collection name "user"
const Teacher = mongoose.model("users", schema);

module.exports=Teacher;