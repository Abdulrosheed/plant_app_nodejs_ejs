const express = require('express');
const route = express.Router();
const controller = require('../controllers/commentController');

route.post('/comment/create' , controller.create);

module.exports = route;