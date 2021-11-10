const mongoose = require('mongoose');

var schemaLecture = new mongoose.Schema({

    lecture : {
        type : String,
        required: true
    },

    professorName : {
        type : String,
        required : true
    },

    lectureRoom : {
        type : String,
        required: true,
    },

    phoneNumber : {
        type : String,
        required: true,
    },

    time : {
        type : String,
        required: true
    }
})


const Lecturedb = mongoose.model('lecturesdb', schemaLecture);

module.exports = Lecturedb;