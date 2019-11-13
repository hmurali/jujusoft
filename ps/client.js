console.log('Running agent')


const io = require('socket.io-client')
const { run, start } = require('./ps')


const socket = io('http://localhost:3000')



socket.on('command', (command) => {
    console.log('running', command)
    start(command)
    .on(data => {
        console.log('stream data', data)
        socket.emit('commandStream', data)
    })
    // run(command)
    //     .then(data => {
    //         socket.emit('commandStream', data)
    //         // console.log('\n\n\n\n\n========', res)
    //     })
})

socket.on('get-process', () => {
    console.log('getting process data')
    run('./script.ps1')
})

socket.on('get-process', () => {
    console.log('getting process data')
    run('Restart-Computer')
})
