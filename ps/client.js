const io = require('socket.io-client')
const run = require('./ps')


const socket = io('http://localhost:3000')



socket.on('get-process', () => {
    console.log('getting process data')
    run('./script.ps1')
})

socket.on('get-process', () => {
    console.log('getting process data')
    run('Restart-Computer')
})

