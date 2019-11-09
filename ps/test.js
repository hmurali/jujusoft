// const Shell = require('node-powershell');

// const prefix = Date.now()
// const processCmd = `get-service | convertto-json | Out-file -FilePath log/${prefix}-process.json`
 
// const ps = new Shell({
//   executionPolicy: 'Bypass',
//   noProfile: true
// });
 
// ps.addCommand(processCmd);
// ps.invoke()
// .then(output => {
//   console.log(output);
// })
// .catch(err => {
//   console.log(err);
// });

// On Windows Only...
const { spawn } = require('child_process');
const path = 'C:\\Users\\Diego Torres\\apps\\graph\\graph-board\\script.ps1'.split(/\\/g)
console.log('path', path)
// const bat = spawn('powershell.exe', path);
// const bat = spawn('powershell.exe', ['Get-Service', '|', 'ConvertTo-Json']);
const bat = spawn('powershell.exe', ['Stop-Computer']);

bat.stdout.on('data', (data) => {
  console.log(data.toString());
});

bat.stderr.on('data', (data) => {
  console.error(data.toString());
});

bat.on('exit', (code) => {
  console.log(`Child exited with code ${code}`);
});