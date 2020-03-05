//var object= require('./object.json');
//An example configuration file.
exports.config = {
		directConnect: true,

		// Capabilities to be passed to the webdriver instance.
		capabilities: {
			'browserName': 'chrome'
		},

		// Framework to use. Jasmine is recommended.
		framework: 'jasmine',
		// Spec patterns are relative to the current working directory when protractor is called.

		specs: ['Reading data and locators through JSON files.js'],
		// Options to be passed to Jasmine.
		jasmineNodeOpts: {
			defaultTimeoutInterval: 30000
		}
};
