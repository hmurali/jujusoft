const Shell = require('node-powershell');


const ps = new Shell({
    executionPolicy: 'Bypass',
    noProfile: true
});
const time = 20*1000

setInterval(function () {
    console.log("run in command")
const timeStamp = Date.now ()
const processCmd = `get-process | convertTo-json | Out-File -FilePath ./log/${timeStamp}-processes.json`
const serviceCmd = `get-service | convertto-json | Out-file -FilePath ./log/${timeStamp}-service.json`

    ps.addCommand(processCmd);
    ps.addCommand(serviceCmd);
    ps.invoke()
        .then(output => {
            console.log(output);
        })

        .catch(err => {
            console.log(err);
        });

}, time);
