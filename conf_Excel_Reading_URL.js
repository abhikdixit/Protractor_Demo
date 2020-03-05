//An example configuration file.
exports.config = {
		//directConnect: true,

		// Capabilities to be passed to the webdriver instance.
		capabilities: {
			'browserName': 'chrome'
		},

		// Framework to use. Jasmine is recommended.
		framework: 'jasmine',
		// seleniumAddress: 'http://localhost:4444/wd/hub',
		specs: ['Read_URL_From_Excel_file_Using_ExcelJS.js'],
		// Options to be passed to Jasmine.
		jasmineNodeOpts: {
			defaultTimeoutInterval: 30000
		}
};
