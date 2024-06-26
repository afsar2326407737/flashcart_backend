const express = require('express');
const Teacher = require('../models/teacher_model.js');
const { json } = require('body-parser');
// const { sign } = require('jsonwebtoken');


const signin=async(req,res)=>{
    try {
        
        console.log("Inside the signup function");
        const { name, id, email, password, cpassword } = req.body;
        if (email == "" ) {
            return res.status(400),json({error:"the Field is empty"});
        }

        if ((email !== "") && (name !== "") && (id !== "") && (password !== "") &&(cpassword !== "") ){
            const data = new Teacher({
                name,
                id,
                email,
                password,
                cpassword
            });
        const savedData = await data.save();
        res.status(201).json(savedData);
        }
        // Save to MongoDB
        
        // Simple password validation
        if (password !== cpassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



module.exports=signin;