//require('jasmine-promises');
var { Builder, By, Key, until } = require('selenium-webdriver');
var jasmineAsync = require('jasmine-async-suite');
jasmineAsync.install();

function timeout() {
    return new Promise(function(resolve) {
        setTimeout(resolve, 9000);
    });
}
describe('User Authentication', function() {
    var driver;
    beforeAll(
        function() {
            driver = new Builder().usingServer('http://localhost:4444/selenium-server')
                .withCapabilities({
                    'browserName': 'chrome'
                }).build();
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        }
    );
    afterAll(function() {
        //driver.end();
        // jasmineAsync.uninstall();
    });
    it('User can sign in', function() {
        driver.get('http://travel.agileway.net');
        driver.findElement(By.name('username')).sendKeys('agileway');
        driver.findElement(By.name('password')).sendKeys('testwise');
        driver.findElement(By.name('commit')).click();
        driver.wait(function() {
            return driver.getTitle().then(function(title) {
                expect(title).toBe("Agile Trvel");
                done();
            });
        });
    });
});