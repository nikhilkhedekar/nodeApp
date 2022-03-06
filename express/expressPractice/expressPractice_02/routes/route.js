const express = require('express');

const routes = require('../controllers/controller')

exports.firstRoute = express().get('/firstRoute', routes.firstRoute);
exports.secondRoute = express().get('/secondRoute', routes.secondRoute);