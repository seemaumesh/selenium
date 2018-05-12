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
            driver = new Builder().usingServer('http://13.236.118.242:4444/wd/hub')
                .withCapabilities({
                    'browserName': 'chrome'
                }).build();
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        }
    );

    afterAll(function() {
        jasmineAsync.uninstall();
    });
    it('should get the driver', function(done) {

        expect(driver).not.toBeNull();
        done();
    });
    it('passes when enough time has passed', function(done) {
        timeout().then(done);
    });

    it('should be on correct page', function(done) {

        driver.get('http://www.google.com/ncr');
        driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        driver.wait(function() {
            return driver.getTitle().then(function(title) {
                expect(title).toBe('webdriver - Google Search');
            });
        });
        done();
    });
});