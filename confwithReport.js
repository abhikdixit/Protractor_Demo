
// An example configuration file.
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
	    'browserName': 'chrome',
		'shardTestFiles': true,
	    'maxInstances': 2
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
 // specs: ['NonAngular_Approach2.js','Promise_With_Example.js'],
 specs: ['GetText_expected_Test.js'],
  
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
