const Shell = require('node-powershell');

const ps = new Shell({
    executionPolicy: 'Bypass',
    noProfile: true
});
const time = 20*1000

setInterval(function () {
    console.log("run in command")
    
const timeStamp = Date.now ()
//Processes cpu/memory etc. //

const processCmd = `get-process | convertTo-json | Out-File -FilePath ./log/${timeStamp}-processes.json`

// const processCmd = `get-process | convertTo-json | Out-File -FilePath ./log/${timeStamp}-processes.json`
const dataCmd = `get-WmiObject -Query "SELECT * FROM Win32_PerfFormattedData_PerfProc_Process" | convertto-json | Out-file -FilePath ./log/${timeStamp}-data.json`

//programs running//
const serviceCmd = `Get-service | where-object {$_.status -eq "running"} | convertto-json | Out-file -FilePath ./log/${timeStamp}-service.json`

//Chrome Usage//
const chromeCmd = `get-process -name Chrome | convertto-json | Out-file -FilePath ./log/${timeStamp}-chrome.json`

//wifi and network information//
const netstatCmd = `netstat -a -n -o | convertto-json | Out-file -FilePath ./log/${timeStamp}-netstat.json`
const wifiCmd = `Get-NetConnectionProfile | convertto-json | Out-file -FilePath ./log/${timeStamp}-networkconnection.json`
const networkCmd = `get-NetAdapterStatistics | convertto-json | Out-file -FilePath ./log/${timeStamp}-networks.json`

//DNS tracking//
const dnsCmd = `ipconfig /displaydns | convertto-json | Out-file -FilePath ./log/${timeStamp}-dns.json`

// const startchromeCMD = 'Start-process -filepath "chrome"'
// const killchromeCmd = `Stop-Process -processname chrome`

    // ps.addCommand (startchromeCMD)
    // // ps.addCommand (killchromeCmd);
    ps.addCommand(processCmd);
    ps.addCommand(wifiCmd)
    ps.addCommand(serviceCmd);
    ps.addCommand(dataCmd);
    ps.addCommand(networkCmd);
    ps.addCommand(chromeCmd);
    ps.addCommand(dnsCmd);
    ps.addCommand(netstatCmd);
    
    ps.invoke()
        .then(output => {
            console.log(output);
        })

        .catch(err => {
            console.log(err);
        });

}, time);
