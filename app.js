const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.json());

require("dotenv/config")

//Imports Routers
const postRoutes = require("./routes/posts");

app.use("/posts", postRoutes);



// this is a middleware
app.use('/posts',() =>{
    console.log("this is middleware")
})

// connect to db
mongoose.connect(process.env.MURL,() =>{
    console.log("connected to DB!")
})


    //this is used to listen for server
app.listen(8000);
