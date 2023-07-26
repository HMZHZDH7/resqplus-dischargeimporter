// const { exec } = require('child_process');
//
// // Function to launch the website in the default browser
// function launchWebsite() {
//     const os = require('os');
//     const cmd = os.platform() === 'win32' ? 'start' : 'xdg-open';
//     exec(`${cmd} src\\discharge-importer-form.html`);
// }
//
// // Function to launch the PowerShell script
// function launchPowerShellScript() {
//     exec('powershell.exe -ExecutionPolicy Bypass -File tobi.ps1');
// }
//
// // Launch both programs concurrently
// launchWebsite();
// launchPowerShellScript();

const { exec } = require('child_process');
const express = require('express');
const path = require('path');
const mime = require('mime');

const app = express();
const port = 3001;

// Set the folder containing your website files (HTML, CSS, JSON, etc.)
const websiteFolder = 'src';

// Serve static files from the specified folder with proper MIME types
app.use(express.static(websiteFolder, {
    setHeaders: (res, filePath) => {
        const contentType = mime.getType(filePath);
        if (contentType) {
            res.setHeader('Content-Type', contentType);
        }
    }
}));

// Function to launch the website in the default browser
function launchWebsite() {
    const os = require('os');
    const cmd = os.platform() === 'win32' ? 'start' : 'xdg-open';
    exec(`${cmd} http://localhost:${port}/discharge-importer-form.html`);
}

// Function to launch the PowerShell script
function launchPowerShellScript() {
    exec('powershell.exe -ExecutionPolicy Bypass -File tobi.ps1');
}

// Launch both programs concurrently
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    launchWebsite();
    launchPowerShellScript();
});





