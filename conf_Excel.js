//An example configuration file.
exports.config = {
		directConnect: true,

		// Capabilities to be passed to the webdriver instance.
		capabilities: {
			'browserName': 'chrome'
		},

		// Framework to use. Jasmine is recommended.
		framework: 'jasmine',
		// seleniumAddress: 'http://localhost:4444/wd/hub',
		// Spec patterns are relative to the current working directory when
		// protractor is called.
		//specs: ['VerifyDifferentControl.js'],
		//specs: ['BasicTest.js'],
		specs: ['Reading Data From Excel File.js'],
		// Options to be passed to Jasmine.
		jasmineNodeOpts: {
			defaultTimeoutInterval: 30000
		}
};
