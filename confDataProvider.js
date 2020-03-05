exports.config = {
    capabilities: {
        'directConnect':true,
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    specs: ['./DataProvider_Spec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 999999
    },
    onPrepare: function () {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        browser.manage().timeouts().setScriptTimeout(60000);
    }
};