// import -> getting necessary library
import { test, expect } from '@playwright/test'

// good code
// doesn't repeat
// formatting
// not too many variables stored
// nice naming practice
// clean -> are you gonna understand this 6 months later
let baseUrl = 'https://www.saucedemo.com/'
let userNameInputLocator = 'input[id="user-name"]'
let passwordInputLocator = 'input[id="password"]'
let loginButtonLocator = 'input[id="login-button"]'
let errorMessageLocator = 'h3[data-test="error"]'

test.beforeAll(async ({ page }) => {
    // all the repeating code before each test goes here
    await page.goto(baseUrl)
})

test('valid username, empty password', async ({ page }) => {
    await page.locator(userNameInputLocator).fill('standard')
    await page.locator(passwordInputLocator).fill('')
    await page.locator(loginButtonLocator).click()
    let expectedText = 'Epic sadface: Password is required'
    let productTitle = page.locator(errorMessageLocator)
    expect(productTitle).toHaveText(expectedText)
})

test('empty username, valid password', async ({ page }) => {
    await page.locator(userNameInputLocator).fill('')
    await page.locator(passwordInputLocator).fill('jdhfkshfk')
    await page.locator(loginButtonLocator).click()
    let expectedText = 'Epic sadface: Username is required'
    let productTitle = page.locator(errorMessageLocator)
    expect(productTitle).toHaveText(expectedText)
})

test('incorrect/not matching/invalid username password combo', async ({ page }) => {
    await page.locator(userNameInputLocator).fill(' fdgdfgd')
    await page.locator(passwordInputLocator).fill('jdhfkshfk')
    await page.locator(loginButtonLocator).click()
    let expectedText = 'Epic sadface: Username and password do not match any user in this service'
    let productTitle = page.locator(errorMessageLocator)
    expect(productTitle).toHaveText(expectedText)
})