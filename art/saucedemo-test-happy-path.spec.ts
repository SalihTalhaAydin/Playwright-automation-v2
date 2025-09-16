import {test, expect} from '@playwright/test'

test('LogIn with Valid credentials', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')

    let usernameField = await page.locator('input[id="user-name"]')
    await usernameField.fill('standard_user')

    let passwordField = await page.locator('input[id="password"]')
    await passwordField.fill('secret_sauce')

    await page.locator('input[id="login-button"]').click()

    let expectedURL = 'https://www.saucedemo.com/inventory.html'
    expect(await page.url()).toBe(expectedURL)
})