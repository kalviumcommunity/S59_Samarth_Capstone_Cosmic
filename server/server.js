const express = require("express");
const mongoose = require('mongoose');
const connectDB = require("./config/db");
const cors = require('cors');
const router = require("./Routes/Route");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true, 
}));
app.use(express.json());


app.use('/route', router);


const handleError = (err, res) => {
    if (err.name === 'ValidationError') {
        res.status(400).send({
            message: 'Validation error',
            errors: err.errors
        });
    } else if (err.code === 11000) {
        res.status(400).send({
            message: 'Duplicate key error',
            error: 'Email already exists'
        });
    } else if (err instanceof mongoose.Error) {
        res.status(500).send({
            message: 'Database error occurred',
            error: err.message
        });
    } else {
        res.status(500).send({
            message: 'An unknown error occurred',
            error: err.message
        });
    }
};


app.get('/', (req, res) => {
    res.send("App is working fine");
});


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`);
    });
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
