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
		specs: ['Writing_Data_To_Excel_File.js'],
		// Options to be passed to Jasmine.
		jasmineNodeOpts: {
			defaultTimeoutInterval: 30000
		}
};
