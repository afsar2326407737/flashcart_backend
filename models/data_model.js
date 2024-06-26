
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    question: String,
    answer: String
});

const dataSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    questions: [questionSchema]
});

const Data = mongoose.model("Data", dataSchema);
module.exports = Data;
