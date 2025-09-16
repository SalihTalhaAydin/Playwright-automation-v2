import {test, expect} from '@playwright/test'

test('Negative -> empty username, valid password', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')

    let passwordField = await page.locator('input[id="password"]')
    await passwordField.fill('secret_sauce')

    await page.locator('input[id="login-button"]').click()

    let actualErrorMessage = await page.locator('h3[data-test="error"]')
    let expectedErrorMessage = 'Epic sadface: Username is required'
    expect(actualErrorMessage).toHaveText(expectedErrorMessage)
})

test('Negative -> valid username, empty password', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')

    let usernameField = await page.locator('input[id="user-name"]')
    await usernameField.fill('standard_user')

    await page.locator('input[id="login-button"]').click()

    let actualErrorMessage = await page.locator('h3[data-test="error"]')
    let expectedErrorMessage = 'Epic sadface: Password is required'
    expect(actualErrorMessage).toHaveText(expectedErrorMessage)
})

test('Negative -> incorrect/not matching/invalid username password combo', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')

    let usernameField = await page.locator('input[id="user-name"]')
    await usernameField.fill('123')

    let passwordField = await page.locator('input[id="password"]')
    await passwordField.fill('123')

    await page.locator('input[id="login-button"]').click()

    let actualErrorMessage = await page.locator('h3[data-test="error"]')
    let expectedErrorMessage = 'Epic sadface: Username and password do not match any user in this service'
    expect(actualErrorMessage).toHaveText(expectedErrorMessage)
})