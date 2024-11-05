const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true,
        unique:true,
    },
    email:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true,
    },
});

const Contact = mongoose.model("Contact", UserSchema)
module.exports = Contact;