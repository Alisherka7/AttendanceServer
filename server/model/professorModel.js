const mongoose = require('mongoose');

var schemaStudent = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  professorID: {
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

  lecture: {
    type: String,
    required: true
  }
});

const Professordb = mongoose.model('professordb', schemaStudent);

module.exports = Professordb;
