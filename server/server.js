const express = require("express");
const mongoose = require('mongoose');
const connectDB = require("./config/db");
const User = require('./models/user');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3000;


app.use(express.json());

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

app.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        handleError(err, res);
    }
});


app.post('/api/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        handleError(err, res);
    }
});

connectDB().then(() => {
    app.listen(PORT, (error) => {
        if (error) {
            console.error('Error starting the server:', error);
        } else {
            console.log(`The server is running on PORT ${PORT}`);
        }
    });
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
