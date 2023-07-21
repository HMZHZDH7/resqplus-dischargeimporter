$unixTime = [System.DateTimeOffset]::Now.ToUnixTimeSeconds()
$executablePath = "eye-tracker-naive\TobiiStream\TobiiStream.exe"
$outputFile = "eye-tracker-naive/samples/$unixTime.txt"

Start-Process -FilePath $executablePath -Wait -RedirectStandardOutput $outputFile