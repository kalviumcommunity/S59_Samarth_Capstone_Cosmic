const express = require("express");
const connectDB = require("./config/db");
const app = express()

require('dotenv').config();

const PORT=process.env.PORT



app.get('/', (req, res) => {
    res.send("App is working fine");
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