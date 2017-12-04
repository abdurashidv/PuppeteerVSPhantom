var path = require('path');
var childProcess = require('child_process');

var address = 'http://google.com';
var foldername = 'sample'; //path.join(__dirname, 'tmp');

var childArgs = [
	path.join(__dirname, 'puppeteer-script.js'),
  	address,
  	foldername
];

var child = childProcess.execFile('node', childArgs, {} , function(err, stdout, stderr) {
	console.log(stdout);
});