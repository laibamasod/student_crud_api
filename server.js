const express = require('express');
require('./model/db');
const studentController = require('./controller/studentController');
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.use(methodOverride('_method'));
app.use("/student", studentController)
app.listen(8080, ()=>{
    console.log("Server at 8080");
});