const mongoose = require('mongoose');
var students = {
  데이터베이스: {
    '61a0bdb03539aa423b603350': {
      이름: '이예준',
      fAttendance: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sAttendance: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    '61a0bf065e529a7295b5274a': {
      이름: '강서준',
      fAttendance: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sAttendance: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }
};
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
    type: Array,
    required: true,
    default: students
  }
});

const Professordb = mongoose.model('professordb', schemaStudent);

module.exports = Professordb;
