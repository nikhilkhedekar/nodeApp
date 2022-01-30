const http = require('http');

const newServer = http.createServer((req, res) => {

    // to end response
    res.end('Hello World');
});

newServer.listen(3000);

module.exports = {
    newServer
}