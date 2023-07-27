const express = require('express');

const app = express();

app.get('/', function(req,res){
    //affiche message sur le browser
    res.send("Hi Barbie")
    
})

app.get('/alien',function(req,res){
    res.send("Welcome back alien ")
})

app.get('/alien/:id',function(req,res){
    const id = req.params.id
    res.send("Here's the door beach "+ id)
})
app.listen(9000,function(req,res){
    console.log("Hi Ken")
})