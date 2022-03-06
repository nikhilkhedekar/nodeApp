const controlRoute = require('../controller/controller');
const express = require('express');

const router = express.Router();

exports.routeOne = router.get('/routeOne', controlRoute.routeOne);
exports.routeTwo = router.get('/routeTwo', controlRoute.routeTwo);

exports.postSchema = router.post('/postData', controlRoute.postSchema)