var start = new Date().getTime(), end;
console.log('start: ',start);

//Import modules
const puppeteer = require('puppeteer');

var address, foldername, screenWidth, screenHeight;

//Application for running file
(async() => {

	const browser = await puppeteer.launch();
	const page = await browser.newPage();	

	try {
        //Holder for passed cmd-arguments
		address = process.argv[2];
		foldername = process.argv[3];
        screenWidth = 1000;
        screenHeight = 700;

		await page.setViewport({width:screenWidth, height: screenHeight});
		await page.goto(address).then(async (msg) => {
            console.log('--------------------------------------------');
            if (msg.ok !== true) {
                console.log('Unable to load the address!');
                await browser.close();
            } else {
                await page.screenshot({path: foldername + '/puppeteer.png'});
                await browser.close();
                end = new Date().getTime();
                console.log('Puppeteer screenshot: ', (end-start)/1000);
            }
        });
    } catch(e){
        console.log('INSIDE CATCH EXCEPTION!');
        await browser.close();
	}
    end = new Date().getTime();
    console.log('end: ', (end-start)/1000);
})();
