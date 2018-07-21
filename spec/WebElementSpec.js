// //require('jasmine-promises');
// var { Builder, By, Key, until } = require('selenium-webdriver');
// var jasmineAsync = require('jasmine-async-suite');
// jasmineAsync.install();

// function timeout() {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, 9000);
//     });
// }

// describe('WebElement test', function() {
//     var driver;
//     beforeEach(async function() {
//         //this.timeout(60000)
//         try {
//             driver = await new Builder().forBrowser('chrome').build();
//             await driver.manage().window().setSize(1600, 900)
//         } catch (ex) {
//             console.log(ex.stack)
//         }

//     })

//     afterEach(async function() {
//         //this.timeout(60000)
//         await driver.quit()
//     })

//     it('should be on correct page', function(done) {

//         driver.get('http://www.google.com/ncr');
//         driver.findElement(By.name('q')).sendKeys('webdriver');
//         driver.findElement(By.name('btnG')).click();

//         driver.quit();
//         done();
//     });
// });