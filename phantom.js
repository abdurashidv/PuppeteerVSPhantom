var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path;

var address = process.argv[2];
var foldername = process.argv[3];
 
var childArgs = [
	path.join(__dirname, 'phantomjs-script.js'),
  	address,
  	foldername,
]

var child = childProcess.execFile(binPath, childArgs, {timeout:60000}, function(err, stdout, stderr) {
    console.log('Done');
    console.log(stdout);
    
    if(stderr){
        console.log('Error');
        console.log(stderr);
    }
    
})