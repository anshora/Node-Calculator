const path = require('path');
const express = require('express');
const rootDir = require('../util/path')
const router = express.Router();
const fs =require('fs');

router.get('/',(req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views','calculator.html'));  
    });

exports.routes = router;