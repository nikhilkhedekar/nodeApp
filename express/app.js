const express = require('express');
const app = express();

//middleware
const morgan = require('morgan');

//using simple route
const getRoute1 = require('./routes/route1');
const { route2 } = require('./routes/route2');

//using router
const mainRouter = require('./router/router');

//======================================================================================================================================

//middleware
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hellow Express');
}).listen(8080, () => { console.log('Listening On 8080') });

//using simple route
app.get('/route1', getRoute1.route1);
app.get('/route2', route2);

//using router
app.use('/router', mainRouter.router);