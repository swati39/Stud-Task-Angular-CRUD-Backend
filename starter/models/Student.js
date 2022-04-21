const mongoose = require('mongoose')
const validator = require('validator');


const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter a name"],
        trim:true,
        maxlength:[30,'Name cannot exceed 30 characters'],
        minlength:[4,'Name should be atleaset 4 characters']
    },
    dob:{
        type: Date,
        required:[true,"Please enter your dob!"],
    },
    email:{
        type:String,
        required:[true,'Please enter a password'],
        validate:[validator.isEmail,'Please enter a valid email'],
    },
    gender:{
        type:String,
        required:[true,"Please select a value"],
        select:true,
    },
    phone:{
        type:Number,
        required:[true,"Please enter a valid phone number"],  
        maxlength:[10,'Phone number should be at least 10 characters long'],
   
    },
    //type array max length 1
})
module.exports = mongoose.model('Student',StudentSchema);





