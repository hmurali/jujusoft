// On Windows Only...
const { spawn } = require('child_process');

function run(command) {
    let response = ''
    return new Promise((resolve, reject) => {
        const cmdArr = command.split(/[ ]/g)
        console.log('command', cmdArr)
        const bat = spawn('powershell.exe', cmdArr);

        bat.stdout.on('data', (data) => {
            response += data.toString()
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


module.exports = run

// run ('stop-computer')
// // run ('./script.ps1')
//     .then((code) => console.log(code))