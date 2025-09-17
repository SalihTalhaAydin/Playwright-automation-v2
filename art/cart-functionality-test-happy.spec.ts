import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com/')

    let usernameInput = await page.locator('input[id="user-name"]')
    await usernameInput.fill('standard_user')

    let passwordInput = await page.locator('input[id="password"]')
    await passwordInput.fill('secret_sauce')

    await page.locator('input[id="login-button"]').click()
})

test('Cart functionality happy path validation', async ({page}) => {
    await page.locator('a[class="shopping_cart_link"]').click()

    let expectedCartTitle = 'Your Cart'
    expect(await page.locator('span[class="title"]')).toHaveText(expectedCartTitle)
})