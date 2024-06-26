const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const MongoModel=require('./models/teacher_model.js')
const signin = require('./controller/signup.js')
const login = require('./controller/login.js')
const datainsert = require('./controller/data_store.js');
const bodyParser = require("body-parser");
const dataget = require("./controller/dataget.js");

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
// DB connection
async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb+srv://mohamedafsar364:Afsar123@cluster0.fixlbby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB", err);
    }
}

// Define schema

// POST request handler
app.post('/signup', signin);
app.post('/login',login)
app.post('/data',datainsert);
app.get('/dataget',dataget);

// Connect to MongoDB
connectToDatabase();

// Start the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

