const net = require('net');

const netApp = net.createServer(socket => {
    console.log("netSocket:8081", socket);
}, {
    cors: {
        origin: "*"
    }
}).listen(8081, () => {
    console.log("netSocket:8081")
});

netApp.on("connection", (socket) => {
    console.log("netSocketId", socket);
});

module.exports = netApp