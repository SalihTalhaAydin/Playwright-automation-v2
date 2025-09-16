import { test, expect } from '@playwright/test'

test('Positive sauce demo login functionality', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('input[id="user-name"]').fill('standard_user')
    await page.locator('input[id="password"]').fill('secret_sauce')
    await page.locator('input[id="login-button"]').click()
    let expectedText = 'Products'
    let productTitle = page.locator('span[class="title"]')
    let actualText = await productTitle.innerText()
    expect(productTitle).toHaveText(expectedText)
})