const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://gowrisatto:gowrisatto@cluster0.uefsbcb.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected");
})
.catch(err=>console.log(err));
// schema creation for the  ease of database

let Schema = mongoose.Schema;


const studentSchema = new Schema({
    sname:String,
    sgrade:Number
})

var studentModel = mongoose.model("students",studentSchema);
module.exports = studentModel