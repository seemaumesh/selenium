//require('jasmine-promises');
var { Builder, By, Key, until } = require('selenium-webdriver');
var jasmineAsync = require('jasmine-async-suite');
jasmineAsync.install();

function timeout() {
    return new Promise(function(resolve) {
        setTimeout(resolve, 9000);
    });
}

describe('link test', function() {
    var driver;
    beforeEach(async function(done) {
        //this.timeout(60000)
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        try {
            driver = await new Builder().forBrowser('chrome').build();
            await driver.manage().window().setSize(1600, 900)
            console.log("Link")
            done();
        } catch (ex) {
            console.log(ex.stack)
        }

    })

    afterAll(async function() {
        //this.timeout(60000)
        //
        // if (driver && driver.getSession())
        //     await driver.quit()
    })

    it('User can sign in', function(done) {
        driver.get('http://travel.agileway.net');
        driver.findElement(By.name('username')).sendKeys('agileway');
        driver.findElement(By.name('password')).sendKeys('testwise');
        driver.findElement(By.name('commit')).click();
        driver.wait(function() {
            return driver.findElement(By.id('flash_notice')).getText().then(async function(text) {
                expect(text).toBe("Signed in!");
                //driver.findElement(By.linkText('logout')).click();
                await driver.close();
                done();

            });

        });
    });
});