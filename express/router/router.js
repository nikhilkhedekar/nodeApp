const express = require('express');
const router = express.Router();

const apiRoute = require('../controller/controllers');

router.get('/apiRoute1', apiRoute.api1);
router.get('/apiRoute2', apiRoute.api2);

module.exports = {
    router
}