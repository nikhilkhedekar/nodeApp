const express = require('express');
const router = express.Router();

const routes = require('./controllers')

router.get('/routeOne', routes.getRoute1);
router.get('/routeTwo', routes.getRoute2);
router.post('/mongooseRoute', routes.postSchema);

module.exports = {
    router
}