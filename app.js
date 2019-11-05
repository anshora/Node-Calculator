const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

const bodyParser=require('body-parser');
const calcroute=require('./routes/calc');
// const operate=require('./util/functions')

// app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));
app.use(calcroute.routes);
app.use((req,res,next)=> {
    res.status(404).sendFile(path.join(__dirname,'views','error.html'));
});

app.listen(3000);
