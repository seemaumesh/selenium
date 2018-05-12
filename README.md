# Javascript Jasmine Example Project
This folder contains an example Javascript project that uses Selenium and Jasmine to perform automated web tests on virtual machines that run on TestChameleon™.

To run this simple test you need to have **npm** and **nodejs** installed. The test is executed by calling
```
npm install
./node_modules/.bin/jasmine init
```
to install the neccessary modules. 
to configure jasmine as well
Afterwards call
```
npm test
```
This will run all Javascript-files which contain "spec" in their name.
After the test a testresult is being created in the reports folder.

Installed modules:
* selenium-webdriver
* jasmine
* jasmine-spec-reporter
