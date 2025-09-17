import { test, expect } from '@playwright/test'
let baseUrl = 'https://www.saucedemo.com/'
let userNameInputLocator = 'input[id="user-name"]'
let passwordInputLocator = 'input[id="password"]'
let loginButtonLocator = 'input[id="login-button"]'
let cartButtonLocator = 'a[class="shopping_cart_link"]'
let cartPageTitleLocator = 'span[class="title"]'

test('Positive sauce demo login functionality', async ({ page }) => {
    await page.goto(baseUrl)
    await page.locator(userNameInputLocator).fill('standard_user')
    await page.locator(passwordInputLocator).fill('secret_sauce')
    await page.locator(loginButtonLocator).click()
    await page.locator(cartButtonLocator).click()
    let expectedText = 'Your Cart'
    let cartTitle = page.locator(cartPageTitleLocator)
    expect(cartTitle).toHaveText(expectedText)
})