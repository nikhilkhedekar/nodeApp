const express = require('express');
const route = require('./routes/route');

exports.app = express().get('/', (req, res) => {
    res.send('listening 8080');
}).listen(8080, console.log('8080'));

exports.routeOne = express().use('/routeOne', route.firstRoute);
exports.routeTwo = express().use('/routeTwo', route.secondRoute);