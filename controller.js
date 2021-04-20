const puppeteer = require('puppeteer');

exports.run = async function(){
    // let browser = await puppeteer.launch({ headless: false, args: ['--start-maximized'] });
    const browser = await puppeteer.launch({
        executablePath: 'C://Users//ACER//AppData//Local//Google//Chrome//Application//chrome.exe',
        headless: false,
        args: [
            '--auto-open-devtools-for-tabs',
            '--disable-dev-shm-usage',
            '--start-maximized'
        ]
    });
    const context = browser.defaultBrowserContext();
    let page = await browser.newPage();
    await page.setViewport({ width: 0, height: 0 });

    let url = ['https://jagoanngoding.blogspot.com/','https://jagoanngoding.blogspot.com/2021/04/blog-post.html'];

    for(let i=0;i<10000;i++){
        for(let j=0;j<url.length;j++){
            let k =0;
            await page.goto(url[j],{
                waitUntil: "networkidle2",
            });
              await page.waitFor(5000);

        }
        console.log(i+=1);
    }


}