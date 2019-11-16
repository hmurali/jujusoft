// On Windows Only...
const { spawn } = require('child_process');

function run(command, emit) {
    let response = ''
    return new Promise((resolve, reject) => {
        const cmdArr = command.split(/[ ]/g)
        console.log('command', cmdArr)
        const bat = spawn('powershell.exe', cmdArr);

        bat.stdout.on('data', (data) => {
            response += data.toString()
            // console.log('data.toString()');
            console.log(data.toString());
        });
        bat.stderr.on('data', (data) => {
            console.error(data.toString());
        });

        bat.on('exit', (code) => {
            resolve(response)
        });
    })


}

function start(initialCommand) {
    let response = ''
    const cmdArr = initialCommand.split(/[ ]/g)
    console.log('command', cmdArr)
    const bat = spawn('powershell.exe', cmdArr);

    const handlers = []


    function emit(event) {
        handlers.forEach(handler => handler(event))
    }

    /**
     * register a callback 
     * @param {Function} handler
     */
    function on(handler) {
        handlers.push(handler)
    }

    bat.stdout.on('data', (data) => {
        response += data.toString()
        emit(response)

    });
    // bat.stdin
    bat.stderr.on('data', (data) => {
        console.error(data.toString());
    });

    bat.on('exit', (code) => {
        console.log('exiting')
        // resolve(response)
        return
    });

    return { on }

}

module.exports = {
    run,
    start
}

// run ('stop-computer')
// // run ('./script.ps1')
//     .then((code) => console.log(code))