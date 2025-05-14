var express=require('express')
var app=express();
var db=require('./dbconnection')
var cors=require("cors")
var multer=require('multer')
var route=require('./routes')
var parser=require('body-parser');
app.use(parser.json());
app.use(cors())
app.use('/',route);
app.use(express.static(`${__dirname}/upload`));
// app.use(express.json());






app.listen(8080,()=>{
    console.log('hai');
});