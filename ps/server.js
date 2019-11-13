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

app.route('/users')
    .get (function (req, res){
      console.log('get /users')
      res.json({})
    })
    .post (function (req, res){
        const body = req.body
        console.log (body)
      console.log('get /users')
      res.json({body})
    })

app.route('/users/:userid')
    .get (function (req, res){
       console.log('get /users/:userid', req.params.userid)
       res.json({})
    })
    .put (function (req, res){
        const body = req.body
        console.log (body)
       console.log('put /users/:userid', req.params.userid)
       res.json({body})
    })
    .delete (function (req, res){
        console.log('delete /users/:userid', req.params.userid)
        res.json({})
    })

app.route('/computer')
    .get (function (req, res){
        console.log('get /computer')
        res.json({})
    })
    .post (function (req, res){
        const body = req.body
        console.log (body)
        console.log('post /computer')
        res.json({body})
    })

app.route('/computer/:computerid')
    .get (function (req, res){
        console.log('get /computer/:computerid')
        res.json({})
    })
    .put (function (req, res){
        const body = req.body
        console.log (body)
        console.log('put /computer/:computerid')
        res.json({body})
    })
    .delete (function (req, res){
        console.log('delete /computer/:computerid')
        res.json({})
    })




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