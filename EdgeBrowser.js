// An example configuration file.
exports.config = {
 directConnect: false,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
	    'browserName': 'MicrosoftEdge'
	  },
 // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  // Spec patterns are relative to the current working directory when
  specs: ['Expect_toEquall_Test.js'],
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
