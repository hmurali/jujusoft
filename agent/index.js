const exec = require('child_process').exec;  
var time = 10000

exec('powershell Get-Service', (err, stdout, stderr) => {  
    if (err) {  
      console.error(err);  
      return;  
    }  
    console.log(stdout);

    
// setInterval(function () {
// }, 2000); // Execute somethingElse() every 2 seconds.
});




// const Shell = require('node-powershell');

// const processCmd = 'get-service | convertto-json | Out-file -FilePath process.json'
 
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

// // Execute somethingElse() every 2 seconds.

// setInterval(function () {
//     console.log ("run in command")
//     exec('process.ps1', (err, stdout, stderr) => {  
//         if (err) {  
//           console.error(err);  
//           return;  
//         }  
//         console.log(stdout, stderr);
//       });
      
// }, time); 

// const { execFile } = require('child_process');
// const child = execFile('ps1process.ps1', (error, stdout, stderr) => {
//   if (error) {
//     throw error;
//   }
//   console.log(stdout);
// });