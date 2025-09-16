import {test, expect} from '@playwright/test'

test('“All Items” menu option happy path validation', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')

    let usernameField = await page.locator('input[id="user-name"]')
    await usernameField.fill('standard_user')

    let passwordField = await page.locator('input[id="password"]')
    await passwordField.fill('secret_sauce')

    await page.locator('input[id="login-button"]').click()

    await page.locator('button[id="react-burger-menu-btn"]').click()

    let allItemsButton = await page.locator('a[id="inventory_sidebar_link"]')
    let expectedAllItemsText = 'All Items'

    expect(allItemsButton).toHaveText(expectedAllItemsText)

    await allItemsButton.click()

    let allItemsTitle = await page.locator('span[class="title"]')
    let expectedAllItemsTitle = 'Products'

    expect(allItemsTitle).toHaveText(expectedAllItemsTitle)
})

test('“About” menu option happy path validation', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')

    let usernameField = await page.locator('input[id="user-name"]')
    await usernameField.fill('standard_user')

    let passwordField = await page.locator('input[id="password"]')
    await passwordField.fill('secret_sauce')

    await page.locator('input[id="login-button"]').click()

    await page.locator('button[id="react-burger-menu-btn"]').click()

    let aboutButton = await page.locator('a[id="about_sidebar_link"]')
    let expectedAboutText = 'About'

    expect(aboutButton).toHaveText(expectedAboutText)

    await aboutButton.click()

    let homePageTitle = await page.locator('h1[class="MuiTypography-root MuiTypography-h1 css-152qxt"]').innerText()
    let expectedHomePageTitle = 'Build apps users love with AI-driven quality'

    expect(homePageTitle).toBe(expectedHomePageTitle)
})

test('“Logout” menu option happy path validation', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')

    let usernameField = await page.locator('input[id="user-name"]')
    await usernameField.fill('standard_user')

    let passwordField = await page.locator('input[id="password"]')
    await passwordField.fill('secret_sauce')

    await page.locator('input[id="login-button"]').click()

    await page.locator('button[id="react-burger-menu-btn"]').click()

    let logoutButton = await page.locator('a[id="logout_sidebar_link"]')
    let expectedLogoutText = 'Logout'

    expect(logoutButton).toHaveText(expectedLogoutText)

    await logoutButton.click()

    let loginAttributeValue = await page.getAttribute('input[id="login-button"]', 'value')
    let expectedLoginButtonText = 'Login'

    expect(loginAttributeValue).toBe(expectedLoginButtonText)
})

test('“Reset App State” menu option happy path validation', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')

    let usernameField = await page.locator('input[id="user-name"]')
    await usernameField.fill('standard_user')

    let passwordField = await page.locator('input[id="password"]')
    await passwordField.fill('secret_sauce')

    await page.locator('input[id="login-button"]').click()

    await page.locator('button[id="react-burger-menu-btn"]').click()

    let resetAppStateButton = await page.locator('a[id="reset_sidebar_link"]')
    let expectedResetAppStateText = 'Reset App State'

    expect(resetAppStateButton).toHaveText(expectedResetAppStateText)

    await resetAppStateButton.click()

    let actualURL = await page.url()
    let expectedURL = 'https://www.saucedemo.com/inventory.html'

    expect(actualURL).toBe(expectedURL)
})