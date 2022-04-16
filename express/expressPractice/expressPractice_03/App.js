const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const routes = require('./router');
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(res => {
    console.log('response', res);
});

mongoose.connection.on('error', error => {
    console.log('Error', error);
})

app.get('/', (req, res) => {
    res.send("listening on node express nodemon")
}).listen(8080, () => {
    console.log('listening 8080');
})

app.use('/routes', routes.router);

module.exports = {
    app,
}