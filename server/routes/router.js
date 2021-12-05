const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');
const controllerLecture = require('../controller/controllerLeture');
const controllerProfessor = require('../controller/controllerProfessor');
const controllerTracking = require('../controller/controllerTracking');
/**
 * @description /
 * @method GET /
 */

route.get('/', services.homeRoutes);

/**
 * @description add user
 * @method GET /add-user
 */

route.get('/add-user', services.add_user);
route.get('/add-lecture', services.add_lecture);
route.get('/add-professor', services.add_professor);
route.get('/professor-list', services.professor_list);
route.get('/lecture-list', services.lecture_list);
/**
 * @description update user
 * @method GET /update-user
 */

route.get('/update-user', services.update_user);

route.get('/update-lecture', services.update_lecture);
route.get('/update-professor', services.update_professor);
// API student
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);
// login student post request
route.post('/api/loginStudent', controller.loginStudent);

// API professor
route.post('/api/professors', controllerProfessor.create);
route.get('/api/professors', controllerProfessor.find);
route.put('/api/professors/:id', controllerProfessor.update);
route.delete('/api/professors/:id', controllerProfessor.delete);
// login
route.post('/api/loginPofessor', controllerProfessor.loginProfessor);
// get lecture students
route.get('/api/:idProfessor/:idLecture', controllerProfessor.findAllStudents);

// API lectures
route.post('/api/lectures', controllerLecture.create);
route.get('/api/lectures', controllerLecture.find);
route.put('/api/lectures/:id', controllerLecture.update);
route.delete('/api/lectures/:id', controllerLecture.delete);

// api Trackign attendance
// route.post('/api/trackingStudents', controllerTracking.create);
route.get('/api/tracking', controllerTracking.find);
route.put('/api/trackingupdate/:id', controllerTracking.update);
route.get('/api/trackingdata', controllerTracking.trackingdata);
// route.put('/api/trackingStudents/:id', controllerTracking.update);
// route.delete('/api/trackingStudents/:id', controllerTracking.delete);

module.exports = route;
