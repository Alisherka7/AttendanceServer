const axios = require('axios');
exports.homeRoutes = (req, res) => {
  // Make a get request to /api/users
  axios
    .get('http://localhost:3040/api/users')
    .then(function (response) {
      res.render('index', { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  axios
    .get('http://localhost:3040/api/lectures')
    .then(function (response) {
      res.render('add_user', { lectures: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_lecture = (req, res) => {
  axios
    .get('http://localhost:3040/api/professors')
    .then(function (response) {
      res.render('add_lecture', {
        professors: response.data
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.lecture_list = (req, res) => {
  // Make a get request to /api/lectures
  axios
    .get('http://localhost:3040/api/lectures')
    .then(function (response) {
      res.render('lecture_list', { lectures: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.update_user = (req, res) => {
  axios
    .get('http://localhost:3040/api/users', { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render('update_user', { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

// exports.update_user = (req, res) => {
//   const userData = 'http://localhost:3040/api/users';
//   const userLecture = 'http://localhost:3040/api/lectures';
//   axios
//     .all([userData, userLecture])
//     .then(
//       axios.spread((...allData) => {
//         const user = allData[0]
//         const lectures = allData[1]
//         res.render('update_user', {allData[0],})
//       })
//     ))
//     .catch((err) => {
//       res.send(err);
//     });
// };

exports.update_lecture = (req, res) => {
  axios
    .get('http://localhost:3040/api/lectures', { params: { id: req.query.id } })
    .then(function (lecturedata) {
      res.render('update_lecture', { lecture: lecturedata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

// --------professor
exports.add_professor = (req, res) => {
  axios
    .get('http://localhost:3040/api/lectures')
    .then(function (response) {
      res.render('add_professor', { lectures: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

// update professor acc
exports.update_professor = (req, res) => {
  axios
    .get('http://localhost:3040/api/professors', {
      params: { id: req.query.id }
    })
    .then(function (professordata) {
      res.render('update_professor', { professor: professordata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

// professor List
exports.professor_list = (req, res) => {
  // Make a get request to /api/lectures
  axios
    .get('http://localhost:3040/api/professors')
    .then(function (response) {
      res.render('professor_list', { professors: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

// tracking students
// exports.homeRoutes = (req, res) => {
//   // Make a get request to /api/users
//   axios
//     .get('http://localhost:3040/api/lectures')
//     .then(function (response) {
//       res.render('index', { users: response.data });
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// };
