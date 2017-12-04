var start = new Date().getTime(), end;
console.log('start: ',start);

var page = require('webpage').create(),
    system = require('system'),
    address, folder_name, screenWidth, screenHeight;

try {
    address = system.args[1];
    folder_name = system.args[2];
    screenWidth = 1000;
    screenHeight = 700;

    page.viewportSize = {width: screenWidth, height: screenHeight};
    page.settings.userAgent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/52.0.2743.116 Chrome/52.0.2743.116 Safari/537.36";
    page.open(address, function (status) {
        console.log('--------------------------------------------');
        if (status !== 'success') {
            console.log('Unable to load the address!');
            phantom.exit();
        } else {
            page.render(folder_name +"/phantom.png");
            end = new Date().getTime();
            console.log('Phantom screenshot: ', (end-start)/1000);
            phantom.exit();            
        }        
        end = new Date().getTime();
        console.log('end: ', (end-start)/1000);
    });
    
} catch(e){
    phantom.exit()
}