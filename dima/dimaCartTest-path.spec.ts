






import { test, expect } from '@playwright/test'
test.beforeAll(async ({ page }) => {

    await page.goto(baseUrl)
})
let baseUrl = 'https://www.saucedemo.com/'
let userNameInputLocator = 'input[id="user-name"]'
let userPassword = 'input[id="password"]'
let loginButtonLocator = 'input[id="login-button"]'
let catrButtonLocator = 'class="title"'
let cartPageTitleLocator = 'span[class="title"]'


test('Test cart functionality', async ({ page }) => {
    await page.goto(baseUrl)
    await page.locator(userNameInputLocator).fill('standard_user')
    await page.locator(userPassword).fill('secret_sauce')
    await page.locator(loginButtonLocator).click()
    await page.locator(catrButtonLocator).click()
    let expectedText = 'Your Cart'
    let cartTitle = page.locator(cartPageTitleLocator)
    expect(cartTitle).toHaveText(expectedText)



}


