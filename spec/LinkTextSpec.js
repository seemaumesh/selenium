//require('jasmine-promises');
var { Builder, By, Key, until } = require('selenium-webdriver');
var jasmineAsync = require('jasmine-async-suite');
jasmineAsync.install();

function timeout() {
    return new Promise(function(resolve) {
        setTimeout(resolve, 9000);
    });
}

describe('basic test', function() {
    var driver;
    beforeAll(
        function() {
            driver = new Builder().usingServer('http://localhost:4444/wd/hub')
                .withCapabilities({
                    'browserName': 'chrome'
                }).build();
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        }
    );

    afterAll(function() {
        driver.quit();
        // jasmineAsync.uninstall();
    });
    it('User can sign in', function(done) {
        driver.get('http://travel.agileway.net');
        driver.findElement(By.name('username')).sendKeys('agileway');
        driver.findElement(By.name('password')).sendKeys('testwise');
        driver.findElement(By.name('commit')).click();
        driver.wait(function() {
            return driver.findElement(By.id('flash_notice')).getText().then(function(text) {
                expect(text).toBe("Signed in!");
                driver.findElement(By.linkText('logout')).click();
                done();
            });

        });

    });
});