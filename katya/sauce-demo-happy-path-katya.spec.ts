import { test, expect } from '@playwright/test'

test('Happy path sauce demo page', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('input[id="user-name"]').fill('standard_user')
    await page.locator('input[id="password"]').fill('secret_sauce')
    await page.locator('input[id="login-button"]').click()

    let expectedTitle = 'Products'
    let productTitle = page.locator('span[class="title"]')
    expect(productTitle).toHaveText(expectedTitle)
})  