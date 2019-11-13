const express = require('express');
const app = express();
// const bodyParser = require('body-parser')
const http = require('http').createServer(app);
const io = require('socket.io')(http)
const cors = require('cors')
const { run } = require('./ps')

let socket

// app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>');
});

// agent

app.post('/process', function (req, res) {
    console.log(req.body)
    res.json({ success: true, message: 'great' });
});


app.post('/command', function (req, res) {
    console.log('req', req)
    console.log('req.body', req.body)
    const { command } = req.body
    console.log('command', command)
    socket.emit('command', command)
    res.json({ success: true, message: 'great' });
});

app.get('/command', function (req, res) {
    console.log('req.query', req.query)
    const { command } = req.query
    // console.log('command', command)
    socket.emit('command', command)
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


const broadcastStream = socket =>
    event => {
        console.log(event)
        socket.broadcast.emit('commandStream', event)
    }

io.on('connection', function (sck) {
    socket = sck
    console.log('a user connected');
    socket.on('disconnect', () => console.log('user disconnected'))
    socket.on('commandStream', broadcastStream(socket))
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});