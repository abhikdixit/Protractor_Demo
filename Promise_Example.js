//spec.ts
//import { browser, element, by } from "protractor";

describe('Promise Demo',()=> {
	browser.waitForAngularEnabled(false); 
	it('Protractor Promise Chaining', () => { 
		browser.get('https://google.com/') 
		.then(() => element(by.name('q')).click()) // then keyword is used to chain
		.then(() => element(by.name('q')).sendKeys('Test')) 
		.then(() => element(by.name('q')).getAttribute("title")) 
		.then((name) => {expect(name).toBe("Search") }); 
		console.log("I am the last steps in this prog.");
	}); 
});