const Userdb = require('../model/model');

// create and save new student
exports.create = (req, res) => {
  //vallidate request
  if (!req.body) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  // new student
  const user = new Userdb({
    name: req.body.name,
    studentID: req.body.studentID,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    lectures: req.body.lectures
  });

  // save student in the database
  user
    .save(user)
    .then((data) => {
      res.redirect('/add-user');
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
    Userdb.findById(id)
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
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || 'Error' });
      });
  }
};

//update a new idetified student by student id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Data to update can not be empty' });
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

// Delete a student specified studentID in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
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

// Student Login
exports.loginStudent = (req, res) => {
  var post_data = req.body;
  var studentID = post_data.studentID;
  var password = post_data.password;
  Userdb.find({ studentID: studentID }).count(function (err, number) {
    if (number == 0) {
      res.json('로그인 다시 확인하세요!');
      console.log('로그인 다시 확인하세요!');
    } else {
      // insert data
      Userdb.findOne({ studentID: studentID }, function (err, student) {
        if (password == student.password) {
          res.json(student);
          console.log('Login succuess');
        } else {
          res.json('비밀번호 다시 확인하세요');
          console.log('비밀번호 다시 확인하세요');
        }
      });
    }
  });
};
