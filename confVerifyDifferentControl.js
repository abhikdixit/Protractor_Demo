	exports.config = {

			directConnect: true,
			specs: ['VerifyDifferentControl.js'],
			
	// Capabilities to be passed to the webdriver instance.
		capabilities: {
		'browserName': 'chrome',
		'shardTestFiles': true,
		'maxInstances': 1
		}
			
	};