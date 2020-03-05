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
		specs: ['Create_excel_file_and_write_using_ ExcelJS.js'],
		// Options to be passed to Jasmine.
		jasmineNodeOpts: {
			defaultTimeoutInterval: 30000
		}
};
