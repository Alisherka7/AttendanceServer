const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');
const controllerLecture = require('../controller/controllerLeture');
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
route.get('/lecture-list', services.lecture_list);
/**
 * @description update user
 * @method GET /update-user
 */

route.get('/update-user', services.update_user);

route.get('/update-lecture', services.update_lecture);

// API student
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

// API lectures
route.post('/api/lectures', controllerLecture.create);
route.get('/api/lectures', controllerLecture.find);
route.put('/api/lectures/:id', controllerLecture.update);
route.delete('/api/lectures/:id', controllerLecture.delete);

module.exports = route;
