const mongoose = require('mongoose');

var schemaLecture = new mongoose.Schema({
  lectureID: {
    type: String,
    required: true
  },
  lecture: {
    type: String,
    required: true,
    unique: true
  },
  lectureTime: {
    type: Number,
    required: true
  },
  firstLecture: {
    type: String,
    required: true
  },
  secondLecture: {
    type: String,
    required: true
  },
  lessonTime: {
    type: Number,
    required: true
  }
});

const Lecturedb = mongoose.model('lecturesdb', schemaLecture);

module.exports = Lecturedb;
