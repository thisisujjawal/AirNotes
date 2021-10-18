const mongoose = require('mongoose');
const donenv = require("dotenv");
donenv.config({path : "./config.env"})
const mongoURI = process.env.MONGOOSE_CONNECTION_URL;

const mongodbConnection = ()=>{
    mongoose.connect(mongoURI , ()=>{
        console.log("MongoDB connected successfully");
    })
}
module.exports = mongodbConnection;