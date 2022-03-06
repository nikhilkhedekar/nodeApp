const express = require('express');
const mongoose = require('mongoose');

const expressRoute = require('./router/router');
const app = express();

mongoose.connect('mongodb+srv://Dhungel:Dhungel@awsdhungel.oevqe.mongodb.net/AWSDhungel?retryWrites=true&w=majority')
    .then(res => console.log("Response", res));

mongoose.connection.on('Error', error => console.log("Error", error));

exports.getResponse = app.get('/', (req, res) => {
    res.send('express called again');
}).listen(8081, () => {
    console.log('express called again')
})

exports.routeOne = app.use('/getRoute1', expressRoute.routeOne);
exports.routeTwo = app.use("/getRoute2", expressRoute.routeOne)

exports.postSchema = app.use('/router', expressRoute.postSchema);