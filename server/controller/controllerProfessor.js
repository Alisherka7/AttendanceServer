const { response } = require('express');
const Professordb = require('../model/professorModel');

// create and save new student
exports.create = (req, res) => {
  //vallidate request
  if (!req.body) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  // new student
  const professor = new Professordb({
    name: req.body.name,
    professorID: req.body.professorID,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    lecture: req.body.lecture
  });

  // save student in the database
  professor
    .save(professor)
    .then((data) => {
      res.redirect('/add-professor');
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating a create uperation'
      });
    });
};

// retrive and return all users/ retrive and return a single student
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Profesordb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: 'Not found user with id:' + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: 'Error retrieving user with id' + id });
      });
  } else {
    Professordb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || 'Error' });
      });
  }
};

// professor Login
exports.loginProfessor = (req, res) => {
  var post_data = req.body;
  var professorID = post_data.professorID;
  var password = post_data.password;
  Professordb.find({ professorID: professorID }).count(function (err, number) {
    if (number == 0) {
      res.json('로그인 다시 확인하세요!');
      console.log('로그인 다시 확인하세요!');
    } else {
      // insert data
      Professordb.findOne(
        { professorID: professorID },
        function (err, professor) {
          if (password == professor.password) {
            res.json(professor);
            console.log('Login succuess');
          } else {
            res.json('비밀번호 다시 확인하세요');
            console.log('비밀번호 다시 확인하세요');
          }
        }
      );
    }
  });
};

//update a new idetified student by student id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Data to update can not be empty' });
  }
  const id = req.params.id;
  Professordb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.statud(404).send({
          message: 'cannot update user with ' + id + 'maybe user not found'
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: 'Error Update User Information' });
    });
};

// Delete a professor specified professorID in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Professordb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: 'Cannot Delete with id ' + id + 'Maybe id is wrong'
        });
      } else {
        res.send({
          message: 'User was deleted successfully'
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete User with id =' + id
      });
    });
};

// find all students
exports.findAllStudents = (req, res) => {
  const idProfessor = req.params.idProfessor;
  const idLecture = req.params.idLecture;
};
