import { test, expect } from '@playwright/test'

test('Positive sauce demo login functionality', async ({ page }) => {


    await page.goto('https://www.saucedemo.com/')
    await page.locator('input[class="input_error form_input"]').fill('standard_user')
    await page.locator('div[class="error-message-container"]').fill('secret_sauce')
    let expectedText = 'Products'
    let productTitle = page.locator('span[class="title"]')
    expect(productTitle).toHaveText(expectedText)
})