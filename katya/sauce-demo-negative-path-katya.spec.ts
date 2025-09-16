import { test, expect } from '@playwright/test'

test('Negative path sauce demo page 1', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('input[id="user-name"]').fill('standard_user')
    await page.locator('input[id="password"]').fill('')
    await page.locator('input[id="login-button"]').click()

    let expectedErrorMessage = 'Epic sadface: Password is required'
    let errorMessage = page.locator('h3[data-test="error"]')
    expect(errorMessage).toHaveText(expectedErrorMessage)
})  

test('Negative path sauce demo page 2', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('input[id="user-name"]').fill('')
    await page.locator('input[id="password"]').fill('secret_sauce')
    await page.locator('input[id="login-button"]').click()

    let expectedErrorMessage = 'Epic sadface: Username is required'
    let errorMessage = page.locator('h3[data-test="error"]')
    expect(errorMessage).toHaveText(expectedErrorMessage)
})  

test('Negative path sauce demo page 3', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('input[id="user-name"]').fill('invalid_username')
    await page.locator('input[id="password"]').fill('invalid_password')
    await page.locator('input[id="login-button"]').click()

    let expectedErrorMessage = 'Epic sadface: Username and password do not match any user in this service'
    let errorMessage = page.locator('h3[data-test="error"]')
    expect(errorMessage).toHaveText(expectedErrorMessage)
})  