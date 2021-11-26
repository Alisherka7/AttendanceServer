const mongoose = require('mongoose');
var attendance = new Array(15);
var schemaStudent = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  studentID: {
    type: String,
    required: true
  },

  password: {
    type: String,
    require: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  phoneNumber: {
    type: String,
    required: true
  },

  lectures: {
    type: [Array, attendance],
    required: true
  }
});

const Userdb = mongoose.model('studentOnedb', schemaStudent);

module.exports = Userdb;
