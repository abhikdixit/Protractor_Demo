
// An example configuration file.
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
	  browserName: 'chrome',

	  chromeOptions: {
	     args: ["--headless"]
	   }
	},
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['Expect_toEquall_Test.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'Reports/screenshots'
      }).getJasmine2Reporter());
   },

};
