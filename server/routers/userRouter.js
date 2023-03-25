const express = require('express');
const controller = require('../controllers/userController');

const route = express.Router();

route.get('/user/create' , controller.create_user);
route.get('/' , controller.home);
route.get('/user/logout' , controller.logout);
route.post('/user/create' , controller.create);
route.get('/dashboard' , controller.dashboard);
route.get('/user/login' , controller.login_user);
route.post('/user/login' , controller.login);

module.exports = route;