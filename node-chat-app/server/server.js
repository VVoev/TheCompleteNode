const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User connected');
    socket.on('disconnect', () => {
        console.log('User was disconected');
    })
})

server.listen(port, () => {
    console.log(`Server is up and running on port:${port}`)
})