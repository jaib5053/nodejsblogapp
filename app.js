const express = require('express');
const mongoose= require('mongoose');
const expressLayouts= require('express-ejs-layouts');
const addPostRouter= require('./routes/addPost.js');

const app= new express();

//view engine

app.use(expressLayouts);
app.set('view engine','ejs');

//routers
app.use('/add',addPostRouter);


//route
app.get('/',(req,res)=>{
    res.render('index');
})

//Port
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`working on port ${PORT}`);
});