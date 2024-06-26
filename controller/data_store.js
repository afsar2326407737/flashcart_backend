const express = require('express');
const Teacher = require('../models/teacher_model.js');
const Data = require('../models/data_model.js');

const datainsert = async (req, res) => {
    console.log("inside the data insert function");
    try {
        const { email, question, answer } = req.body;
        const teacher = await Teacher.findOne({ email });
        if (!teacher){
            return res.status(404).json({error:"teacher not found "});
        }
        let dataEntry = await Data.findOne({email})
        if (!dataEntry){
            dataEntry = new Data({ email, questions: [] }); 
        }
        else {
            dataEntry.questions.push({question,answer})
        }
        const savedData = await dataEntry.save();
        return res.status(200).json(savedData);

    } catch (err) {
        return res.status(500).json({ err });
    }
}

module.exports = datainsert;
