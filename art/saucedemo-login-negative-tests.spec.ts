import {test, expect} from '@playwright/test'

test('Negative -> empty username, valid password', async ({page}) => {
    //User goes to https://www.saucedemo.com/ 
    await page.goto('https://www.saucedemo.com/')

    // User doesn’t enter username
    //

    // User enters Valid password
    let passwordField = await page.locator('input[id="password"]')
    await passwordField.fill('secret_sauce')

    // User clicks on Log In button
    await page.locator('input[id="login-button"]').click()

    // User gets error message: “Epic sadface: Username is required“
    let actualErrorMessage = await page.locator('h3[data-test="error"]').innerText()
    let expectedErrorMessage = 'Epic sadface: Username is required'
    expect(actualErrorMessage).toBe(expectedErrorMessage)
})

test('Negative -> valid username, empty password', async ({page}) => {
    //User goes to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/')

    //User enters Valid username
    let usernameField = await page.locator('input[id="user-name"]')
    await usernameField.fill('standard_user')

    // User doesn’t enter password
    //

    // User clicks on Log In button
    await page.locator('input[id="login-button"]').click()

    // User gets error message: “Epic sadface: Password is required“
    let actualErrorMessage = await page.locator('h3[data-test="error"]').innerText()
    let expectedErrorMessage = 'Epic sadface: Password is required'
    expect(actualErrorMessage).toBe(expectedErrorMessage)
})

test('Negative -> incorrect/not matching/invalid username password combo', async ({page}) => {
    //User goes to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/')

    // User enters Invalid username
    let usernameField = await page.locator('input[id="user-name"]')
    await usernameField.fill('123')

    // User enters Invalid password
    let passwordField = await page.locator('input[id="password"]')
    await passwordField.fill('123')

    // User clicks on Log In button
    await page.locator('input[id="login-button"]').click()

    // User gets error message: “Epic sadface: Username and password do not match any user in this service”
    let actualErrorMessage = await page.locator('h3[data-test="error"]').innerText()
    let expectedErrorMessage = 'Epic sadface: Username and password do not match any user in this service'
    expect(actualErrorMessage).toBe(expectedErrorMessage)
})