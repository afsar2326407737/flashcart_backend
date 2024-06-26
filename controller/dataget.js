const Data = require('../models/data_model.js');

const dataget = async(req,res) => {
    console.log("insode the data get function")
    try {
        const data = await Data.find();
        res.json(data);
    }catch(err){
        res.statue(400).json(err.message);
    }
}

module.exports = dataget;