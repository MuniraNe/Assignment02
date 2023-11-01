

// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = require("./config/express");
const Category = require("./model/categories"); 


// Connect to MongoDB and open a connection
mongoose.connect('mongodb+srv://muniraa:muniraa123@cluster0.znlhmb3.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});




app.listen(8081,()=>{
    console.log("Server is running on 8081 http://localhost:8081/");
});


