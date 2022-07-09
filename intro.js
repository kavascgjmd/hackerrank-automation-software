let inputarr = process.argv.slice(2);

let emailid = inputarr[0];
let password = inputarr[1];
let question_name = inputarr[2];
let qname = inputarr[2];







const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const request = require("request");
let page1 ;
let pageurl ;
let ans = "";

function handlehtml(html){
    let $ = cheerio.load(html);
   
    ans = $("#Blog1 > div > div.blog-post.hentry.item-post > div.post-body.post-content > pre:nth-child(11)").text();
   
}

let openbrowser = puppeteer.launch({headless:false});
openbrowser.then(function(browser){
     let browserpages = browser.pages();
     return browserpages;
}).then(function(browserpages){
    page1 = browserpages[0];
    let hi = browserpages[0].goto("https://www.google.com/");
    return hi;
}).then(function(){
    let keywillbepressed = page1.type("input[type='text']","programming one on one "+qname+" solution");
    return keywillbepressed;
}).then(function(){
    let keywillbepressed = page1.keyboard.press("Enter");
    return keywillbepressed;
}).then(function(){
    let waitForSelector = page1.waitForSelector(".LC20lb.MBeuO.DKV0Md");
    return waitForSelector;
}).then(function(){
    let keywillbesend = page1.click(".LC20lb.MBeuO.DKV0Md");
    
    return keywillbesend;
}).then(function(){
   let waitForSelector = page1.waitForSelector("#Blog1 > div > div.blog-post.hentry.item-post > div.post-body.post-content > pre:nth-child(11)");
   pageurl = page1.url();
   return waitForSelector;
})

.then(function (){request(pageurl , cb);
function cb(error, response, html){
  if(error){
    console.error("error:",error);
  }
  else {
    handlehtml(html);
  }
}
})





let page;
const browseropenpromise = puppeteer.launch({headless : false,
    args : ['--start-maximized'],
    defaultViewport : null
   
   }).then(function(browser){
      return browser.pages();
   }).then(function(browserpages){
     page =  browserpages[0];
     let hi = browserpages[0].goto("https://www.hackerrank.com/auth/login");
     return hi;
   }).then(function(){
   let keywillbepressed =   page.type("input[type='text']",emailid ,{delay : 100});
   return keywillbepressed;
   }).then(function(){
    let waitforselector  = page.waitForSelector("input[type='password']",{visible : true});
    return waitforselector;
   })  .then(function(){
    let keywillbepressed = page.type("input[type='password']", password,{delay : 100});
    return keywillbepressed;
   }).then(function(){
    let waitForSelector = page.waitForSelector(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled", {visible : true});
    return waitForSelector;
   }).then(function(){
    let keywillbesend = page.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    
    return keywillbesend;
   }).then(function(){
    let waitForSelector = page.waitForSelector(".ac-input-wrap.cf");
    return waitForSelector;
   }).then(function(){
    let keywillbesend = page.click(".ac-input-wrap.cf",{delay : 100});
    return keywillbesend;
   })
   .then(function(){
    let keywillbepressed = page.type(".ac-input-wrap.cf",question_name ,{delay : 100});
    return keywillbepressed;
   })
   .then(function(){
    let waitForSelector = page.waitForSelector(".search-row.challenge");
    return waitForSelector;
   })
   .then(function(){
    let keywillbesend = page.click(".search-row.challenge");
    return keywillbesend;
   }).then(function(){
    let waitForSelector = page.waitForSelector("input[type='checkbox']",{delay : 100});
    return waitForSelector;
   }).then(function(){
    let keywillbesend = page.click("input[type='checkbox']");
    return keywillbesend;
   }).then(function(){
    let waitForSelector = page.waitForSelector("#input-1");
    return waitForSelector;
   }).then(function(){
   
    let keywillbesend = page.type("#input-1", ans);
    return keywillbesend;

   }).then(function(){
    let ctrlispressed = page.keyboard.down("Control");
    return ctrlispressed;
   }).then(function(){
    let Aispressed = page.keyboard.press("A",{delay:100});
    return Aispressed;
   }).then(function(){
    let Xispressed = page.keyboard.press("X",{delay : 100});
    return Xispressed;
   }).then(function(){
    let ctrlisunpressed = page.keyboard.up("Control");
    return ctrlisunpressed;
   })
   .then(function(){
    let waitForSelector= page.waitForSelector(".monaco-editor.no-user-select.vs");
    return waitForSelector;
   }).then(function(){
    let keywillbesend = page.click(".monaco-editor.no-user-select.vs");
    return keywillbesend;
   }).then(function(){
    let ctrlispressed = page.keyboard.down("Control");
    return ctrlispressed;
   }).then(function(){
    let Aispressed = page.keyboard.press("A",{delay : 100});
    return Aispressed;
   }).then(function(){
    let Vispressed = page.keyboard.press("V" , {delay : 100});
    return Vispressed;
   })
   .then(function(){
    let ctrlisunpressed = page.keyboard.up("Control");
    return ctrlisunpressed;
   })
.then(function(){
  let waitForSelector = page.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
  return waitForSelector;
}).then(function(){
  let keywillbepressed = page.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
  return keywillbepressed;
})
   