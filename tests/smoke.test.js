const puppeteer = require('puppeteer')

describe('It should Launch Browser', () => {
	let browser
	let page
	before(async function () {
		browser = await puppeteer.launch({
			headless: false,
			slowMo: 0,
			devtools: false,
		})
		page = await browser.newPage()
		await page.setDefaultTimeout(10000)
		await page.setDefaultNavigationTimeout(10000)
	})
	after(async function () {
		await browser.close()
	})
	it('Should Load the Website', async function () {
		await page.goto('https://devexpress.github.io/testcafe/example/')
		await page.waitForSelector('#main-form')
	})
})
