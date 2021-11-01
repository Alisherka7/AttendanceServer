const mongoose = require('mongoose');

var schema = new mongoose.Schema({

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

const Userdb = mongoose.model('studentdb', schema);

module.exports = Userdb;