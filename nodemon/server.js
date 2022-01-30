const http = require('http');

exports.newServer = http.createServer((req, res) => {
    res.end('node response updated again and again')
}).listen(3001)