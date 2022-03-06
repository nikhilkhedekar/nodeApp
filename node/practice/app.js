const http = require('http');

exports.getResponse = http.createServer((req, res) => {
    res.end('node try again');
}).listen(8080, () => {
    console.log('I am listening on 8080');
});