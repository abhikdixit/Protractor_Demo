	exports.config = {

			directConnect: true,
			//seleniumAddress: 'http://localhost:4444/wd/hub',
			//specs: ['spec.js']
			//specs: ['BasicTest.js']
			//specs: ['Multiple_it_block_Test.js']
			//specs: ['beforeEach_afterEach_block.js'],
			//specs: ['Multiple_it_block_with_beforeEach_afterEach_block.js'],
			//specs: ['beforeAll_afterAll_block.js'],
			//specs: ['Multiple_Describe_block.js'],
			//specs: ['Execute_Specific_Describe_block.js'],
			//specs: ['Executing_Specific_it_block_Test.js'],
			//specs: ['Disabling_Specific_it_block_Test.js'],
			//specs: ['Expect_toContain_Test.js'],
			//specs: ['Expect_toEquall_Test.js'],
			specs: ['GetText_expected_Test.js'],
			
	// Capabilities to be passed to the webdriver instance.
		capabilities: {
		'browserName': 'chrome',
		'shardTestFiles': true,
		'maxInstances': 1
		}
			
	};