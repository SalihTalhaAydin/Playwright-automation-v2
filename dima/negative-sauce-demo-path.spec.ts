



import { test, expect } from '@playwright/test'

test('Negative sauce demo login functionality', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('input[id="user-name"]').fill('qwerty')
    await page.locator('input[id="password"]').fill('')
    await page.locator('input[id="login-button"]').click()
    let expectedText = 'Epic sadface:Password is requierd'
    let productTitle = page.locator('span[class="title"]')
    expect(productTitle).toHaveText(expectedText)
})




import { test, expect } from '@playwright/test'

test('Negative sauce demo login functionality', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('input[id="user-name"]').fill('')
    await page.locator('input[id="password"]').fill('123123')
    await page.locator('input[id="login-button"]').click()
    let expectedText = 'Epic sadface: Username and password do not match any user in this service'
    let productTitle = page.locator('span[class="title"]')
    expect(productTitle).toHaveText(expectedText)
})

