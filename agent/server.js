const express = require('express');
const app = express();
// const bodyParser = require('body-parser')
const path = require('path')
const http = require('http').createServer(app);
const io = require('socket.io')(http)
const cors = require('cors')
const { run } = require('./ps')

let socket

// app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

// app.use(express.static("control.html"));
app.use('/node_modules', express.static(__dirname + '/node_modules/'))
app.use('/img', express.static(__dirname + '/img/'))
app.get('/control.js', (req, res) => res.sendFile(path.join(__dirname + '/control.js')))



app.get('/control', (req, res) => res.sendFile(path.join(__dirname + '/control.html')))
app.get('/chrome', (req, res) => res.sendFile(path.join(__dirname + '/chrome.html')))
app.get('/cpu', (req, res) => res.sendFile(path.join(__dirname + '/cpu.html')))
app.get('/dns', (req, res) => res.sendFile(path.join(__dirname + '/dns.html')))
app.get('/vscode', (req, res) => res.sendFile(path.join(__dirname + '/vscode.html')))
app.get('/wifi', (req, res) => res.sendFile(path.join(__dirname + '/wifi.html')))
app.get('/devices', (req, res) => res.sendFile(path.join(__dirname + '/devices.html')))
app.get('/network', (req, res) => res.sendFile(path.join(__dirname + '/network.html')))
app.get('/memory', (req, res) => res.sendFile(path.join(__dirname + '/memory.html')))
app.get('/processes', (req, res) => res.sendFile(path.join(__dirname + '/processes.html')))
app.get('/home', (req, res) => res.sendFile(path.join(__dirname + '/home.html')))
app.get('/gpu', (req, res) => res.sendFile(path.join(__dirname + '/gpu.html')))
app.get('/restart', (req, res) => res.sendFile(path.join(__dirname + '/restart.html')))
app.get('/slack', (req, res) => res.sendFile(path.join(__dirname + '/slack.html')))
app.get('/network', (req, res) => res.sendFile(path.join(__dirname + '/network.html')))
app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>');
});

app.post('/process', function (req, res) {
    console.log(req.body)
    res.json({ success: true, message: 'great' });
});


app.post('/command', function (req, res) {
    // console.log('req', req)
    console.log('req.body', req.body)
    const { command } = req.body
    console.log('command', command)
    socket.emit('command', command)
    res.json({ success: true, message: 'great' });
});

// app.get('/command', function (req, res) {
//     console.log('req.query', req.query)
//     const { command } = req.query
//     console.log('command', command)
//     socket.emit('command', command)
//     res.json({ success: true, message: 'great' });
// });

// app.get('/turn-off', function (req, res) {
//     console.log(req.body)
//     socket.emit('turn-off')
//     res.json({ success: true, message: 'great' });
// });

// app.get('/get-process', function (req, res) {
//     console.log(req.body)
//     socket.emit('get-process')
//     res.json({ success: true, message: 'great' });
// });


io.on('connection', function (sck) {

    const broadcastStream = socket =>
        event => {
            console.log(event)
            socket.broadcast.emit('commandStream', event)
        }

    socket = sck
    console.log('a user connected');
    socket.on('disconnect', () => console.log('user disconnected'))
    // socket.on('commandStream', broadcastStream(socket))
    socket.on('commandStream', event => socket.emit('commandStream', event))
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});