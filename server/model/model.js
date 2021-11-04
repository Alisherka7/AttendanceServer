const mongoose = require('mongoose');

var schemaStudent = new mongoose.Schema({

    name : {
        type : String,
        required: true
    },

    studentID : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required: true,
        unique : true
    },

    phoneNumber : {
        type : String,
        required: true,
    },

    lectures : {
        type : String,
        required: true
    }
})



const Userdb = mongoose.model('studentdb', schemaStudent);

module.exports = Userdb;