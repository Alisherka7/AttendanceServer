const mongoose = require('mongoose');

var attendance = new Array(15);
for (var i = 0; i < attendance.length; i++) {
  attendance[i] = 0;
}

var schemaLecture = new mongoose.Schema({
  lecture: {
    type: String,
    required: true
  },

  professorName: {
    type: String,
    required: true
  },

  lectureRoom: {
    type: String,
    required: true
  },

  phoneNumber: {
    type: String,
    required: true
  },

  firstTime: {
    type: String,
    required: true
  },
  secondTime: {
    type: String,
    required: true
  },
  firstAttendance: {
    type: Array,
    required: true,
    default: attendance
  },
  secondAttendance: {
    type: Array,
    required: true,
    default: attendance
  }
});

const Lecturedb = mongoose.model('lecturesdb', schemaLecture);

module.exports = Lecturedb;
