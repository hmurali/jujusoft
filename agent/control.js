let format
const baseUrl = 'http://localhost:3000'
const socket = io(baseUrl)
socket.on('commandStream', event => {
    const output = document.getElementById('output')
    console.log(format)
    if (format === 'html') {
        output.innerHTML = event
    } else if (format === 'json') {
        output.innerText = JSON.stringify(JSON.parse(event), undefined, 2)

    } else {
        output.innerText = event
    }

})

// function getProcess() {
//     console.log('getting process')
//     fetch(`${baseUrl}/get-process`)
// }
// function restartPc() {
//     console.log('restarting computer')
//     fetch(`${baseUrl}/turn-off`)
// }
function sendCommand() {
    const commandElem = document.getElementById('command-to-send')
    const command = commandElem.value
  
    console.log(command)

    if (command.toLowerCase().includes('convertto-html')) { format = 'html' }
    if (command.toLowerCase().includes('convertto-json')) { format = 'json' }
    // fetch(`${baseUrl}/command?command=${command}`)
        fetch(`${baseUrl}/command`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ command })
        })
        .then(res => res.json())
        .then(poshRes => {
            console.log(poshRes)
        })

}


// document.getElementById('process').addEventListener('click', getProcess)
// document.getElementById('restart').addEventListener('click', restartPc)
document.getElementById('send-command').addEventListener('click', sendCommand)

