import { test, expect } from '@playwright/test'

test('Cart Functionality', async ({ page }) => {

    let sauceDemoPage = 'https://www.saucedemo.com/'
    let userNameField = await page.locator('input[id="user-name"]')
    let passwordField = await page.locator('input[id="password"]')
    let loginButton =  await page.locator('input[id="login-button"]')
    let shoppingCartLink = await page.locator('a[class="shopping_cart_link"]')

    await page.goto(sauceDemoPage)
    await userNameField.fill('standard_user')
    await passwordField.fill('secret_sauce')
    await loginButton.click()
    await shoppingCartLink.click()

    let expectedText = 'Your Cart'
    let productText = page.locator('span[class="title"]')
    expect(productText).toHaveText(expectedText)
})  
