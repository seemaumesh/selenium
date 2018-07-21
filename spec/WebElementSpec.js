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
//     beforeAll(
//         function() {
//             driver = new Builder().usingServer('http://localhost:4444/selenium-server')
//                 .withCapabilities({
//                     'browserName': 'chrome'
//                 }).build();
//             jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
//         }
//     );

//     afterAll(function() {
//         jasmineAsync.uninstall();
//     });

//     it('should be on correct page', function(done) {

//         driver.get('http://www.google.com/ncr');
//         driver.findElement(By.name('q')).sendKeys('webdriver');
//         driver.findElement(By.name('btnG')).click();
//         driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//         driver.quit();
//         done();
//     });
// });