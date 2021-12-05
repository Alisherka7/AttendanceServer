const axios = require('axios');
const { response } = require('express');
const TrackingDb = require('../model/trackingModel');

// change date
function dateChange(date) {
  const res = new Date(date);
  res.setDate(res.getDate() + 7);
  return res.toISOString().slice(0, 19);
}

// professors json data
var jsonStudents = {};
function studentData() {
  axios
    .get('http://localhost:3040/api/users')
    .then(function (response) {
      jsonStudents = JSON.parse(JSON.stringify(response.data));

      return response.data;
    })
    .catch((err) => {
      res.send(err);
    });
}
studentData();

// professors json data
var jsonLectures = {};
function lectureData() {
  axios
    .get('http://localhost:3040/api/lectures')
    .then(function (response) {
      jsonLectures = JSON.parse(JSON.stringify(response.data));

      return response.data;
    })
    .catch((err) => {
      res.send(err);
    });
}
lectureData();

// parsing Json Data
var lectures = {};

// professors json data
var jsonProfessors = {};
function professorData() {
  axios
    .get('http://localhost:3040/api/professors')
    .then(function (response) {
      jsonProfessors = JSON.parse(JSON.stringify(response.data));

      return response.data;
    })
    .catch((err) => {
      res.send(err);
    });
}
professorData();

// tracking function
function tracking() {
  for (lecture in jsonLectures) {
    var calcLessons =
      jsonLectures[lecture]['lectureTime'] /
      (jsonLectures[lecture]['lessonTime'] * 2);
    jsonLectures[lecture]['lessonTime']; // 15

    var professorName = {};
    // 교수 성명 추가
    for (prof in jsonProfessors) {
      if (
        jsonProfessors[prof]['lecture'].includes(
          jsonLectures[lecture]['lecture']
        )
      ) {
        professorName['professorName'] = jsonProfessors[prof]['name'];
      }
      //add professor Name
      lectures[jsonLectures[lecture]['lecture']] = professorName;
    }

    // console.log(professorName);
    lectures[jsonLectures[lecture]['lecture']] = {};
    var times = {};
    var DateTime1 = jsonLectures[lecture]['firstLecture'];
    for (var i = 0; i < calcLessons; i++) {
      times[DateTime1] = {};
      var listOfStudents = {};
      for (std in jsonStudents) {
        // compare student lecture
        if (
          jsonStudents[std]['lectures'].includes(
            jsonLectures[lecture]['lecture']
          )
        ) {
          // then
          // '알레셰르': 0, '쿠무샤이': 0, '김성보': 0
          listOfStudents[jsonStudents[std]['name']] = 0;
        }
        //'2021-12-01T10:16': { '알레셰르': 0, '쿠무샤이': 0, '김성보': 0 }
        times[DateTime1] = listOfStudents;
      }

      //'데이터베이스': { '2021-12-01T10:16': { '알레셰르': 0, '쿠무샤이': 0, '김성보': 0 } },
      lectures[jsonLectures[lecture]['lecture']] = times;
      // add 7day
      DateTime1 = dateChange(DateTime1);
    }

    // second time loop
    var DateTime2 = jsonLectures[lecture]['secondLecture'];
    for (var i = 0; i < calcLessons; i++) {
      times[DateTime2] = {};
      var listOfStudents = {};
      for (std in jsonStudents) {
        // compare student lecture
        if (
          jsonStudents[std]['lectures'].includes(
            jsonLectures[lecture]['lecture']
          )
        ) {
          // then
          // '알레셰르': 0, '쿠무샤이': 0, '김성보': 0
          listOfStudents[jsonStudents[std]['name']] = 0;
        }
        //'2021-12-01T10:16': { '알레셰르': 0, '쿠무샤이': 0, '김성보': 0 }
        times[DateTime2] = listOfStudents;
      }
      //'데이터베이스': { '2021-12-01T10:16': { '알레셰르': 0, '쿠무샤이': 0, '김성보': 0 } },
      lectures[jsonLectures[lecture]['lecture']] = times;
      //add 7day
      DateTime2 = dateChange(DateTime2);
    }

    // lectures[jsonLectures[lecture]['lecture']] = {
    //   lectureTime: jsonLectures[lecture]['lectureTime']
    // };
  }
  console.log(lectures);
  //   for (st in jsonStudents) {
  //     console.log(jsonStudents[st]['lectures']);
  //   }
}

exports.find = (req, res) => {
  //vallidate request
  if (!req.body) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  tracking();
  const trackingModel = new TrackingDb({
    trackingData: lectures
  });

  // save student in the database
  trackingModel
    .save(trackingModel)
    .then((data) => {
      res.send(lectures);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating a create uperation'
      });
    });
};

exports.update = (req, res) => {
  //vallidate request
  if (!req.body) {
    return res.status(400).send({ message: 'Data to update can not be empty' });
  }
  const id = req.params.id;
  TrackingDb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.statud(404).send({
          message: 'cannot update user with ' + id + 'maybe user not found'
        });
      } else {
        res.json(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: 'Error Update User Information' });
    });
};

// get last record
exports.trackingdata = (req, res) => {
  //vallidate request
  if (!req.body) {
    return res.status(400).send({ message: 'Data to update can not be empty' });
  }
  TrackingDb.findOne({}, {}, { sort: { _id: -1 } })
    .then((data) => {
      if (!data) {
        res.statud(404).send({
          message: 'user not found'
        });
      } else {
        res.send(data);
        console.log(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: 'Error Update User Information' });
    });
};
