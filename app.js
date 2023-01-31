require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 7400;
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
const employeeRouter = require('./routes/employeeRouter')
// CONFIGURING VIEW ENGINE
app.set("view engine",'ejs');

//MIDDLEWARE 
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//ROUTES
app.use(employeeRouter)


//DATABASE COLLECTION
app.get("/create", (req,res)=>{
    res.status(200).render("create")
})

mongoose.connect(process.env.MONGO_URI).then(() =>{
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}..`)
    })
})
.catch((err) => {
    console.log(err)
})