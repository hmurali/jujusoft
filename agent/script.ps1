
# Get-Process | Where-Object {$_.WorkingSet -gt 20000000}


$uri='http://localhost:3000/process'
$body = Get-Process | Sort-Object -Descending CPU | Select-Object -Property Id, Handles, Handle, Name, Description, CPU, NPM, PM, SI, VM, WS, Size, Path | ConvertTo-Json -Compress

# $body | Out-File -FilePath res.json 

$env:COMPUTERNAME

$res= Invoke-RestMethod -Method POST -Uri $uri -Body $body -ContentType application/json 
$res