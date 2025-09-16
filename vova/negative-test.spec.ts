import { test, expect } from '@playwright/test'

test('negative sauce demo login functionality', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('input[id="user-name"]').fill('standard')
    await page.locator('input[id="password"]').fill('')
    await page.locator('input[id="login-button"]').click()
    let expectedText = 'Epic sadface: Password is required'
    let productTitle = page.locator('h3[data-test="error"]')
    let actualText = await productTitle.innerText()
    expect(productTitle).toHaveText(expectedText)
})

test('1 negative sauce demo login functionality', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('input[id="user-name"]').fill(' ')
    await page.locator('input[id="password"]').fill('jdhfkshfk')
    await page.locator('input[id="login-button"]').click()
    let expectedText = 'Epic sadface: Username is required'
    let productTitle = page.locator('h3[data-test="error"]')
    let actualText = await productTitle.innerText()
    expect(productTitle).toHaveText(expectedText)
})

test('2 negative sauce demo login functionality', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('input[id="user-name"]').fill(' fdgdfgd')
    await page.locator('input[id="password"]').fill('jdhfkshfk')
    await page.locator('input[id="login-button"]').click()
    let expectedText = 'Epic sadface: Username and password do not match any user in this service'
    let productTitle = page.locator('h3[data-test="error"]')
    let actualText = await productTitle.innerText()
    expect(productTitle).toHaveText(expectedText)
})
