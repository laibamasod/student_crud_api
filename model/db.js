
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/student",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connection Established.....")
}).catch((err)=>{console.log(err)})

require("./studentModel");