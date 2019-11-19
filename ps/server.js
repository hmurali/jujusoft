const express = require('express');
const app = express();
const mongoose = require("mongoose");
// const bodyParser = require('body-parser')
const http = require('http').createServer(app);


const io = require('socket.io')(http)
const cors = require('cors')
const { run } = require('./ps')
const apiroutes = require('./api.routes')

let socket

const PORT = process.env.PORT || 3000;


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/juju");

// app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use(apiroutes)

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

http.listen(PORT, function () {
    console.log(`listening on *:${PORT}`);
});