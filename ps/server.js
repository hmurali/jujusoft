const app = require('express')();
const bodyParser = require('body-parser')
const http = require('http').createServer(app);
const io = require('socket.io')(http)
const run = require('./ps')
const mongoose = require('mongoose')
const react = require('react')

let socket

app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>');
});

app.post('/process', function (req, res) {
    console.log(req.body)
    res.json({ success: true, message: 'great' });
});

app.get('/turn-off', function (req, res) {
    console.log(req.body)
    socket.emit('turn-off')
    res.json({ success: true, message: 'great' });
});

app.get('/get-process', function (req, res) {
    console.log(req.body)
    socket.emit('get-process')
    res.json({ success: true, message: 'great' });
});



io.on('connection', function (sck) {
    socket = sck
    console.log('a user connected');
    socket.on('disconnect', () => console.log('user disconnected'))
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});