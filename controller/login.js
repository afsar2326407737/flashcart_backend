const express = require('express');
const Teacher = require('../models/teacher_model.js');

const login = async (req,res)=>{
    
    try{
        const {email} = req.body;
        const exist = await Teacher.findOne({email});
        if (!exist){
            console.log("user does not exist ")
            return res.status(404).json({eror :" user does not exist "});
        }
        res.status(200).json({message:"login succesfully"});
    }catch(err){
        res.status(401).jsoon({error:err.message});
    }
    
};

module.exports = login;