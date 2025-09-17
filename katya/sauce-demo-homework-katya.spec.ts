import { test, expect } from '@playwright/test'
import { resolve } from 'path'

test('Login and Left menu button (hamburger icon) functionalities', async ({ page }) => {
    let sauceDemoPage = 'https://www.saucedemo.com/'
    let userNameField = page.locator('input[id="user-name"]')
    let passwordField = page.locator('input[id="password"]')
    let loginButton = page.locator('input[id="login-button"]')
    let burgerMenuButton = page.locator('button[id="react-burger-menu-btn"]')
    let allItemsButton = page.locator('a[id="inventory_sidebar_link"]')
    let aboutButton = page.locator('a[id="about_sidebar_link"]')
    let logoutButton = page.locator('a[id="logout_sidebar_link"]')
    let resetAppState = page.locator('a[id="reset_sidebar_link"]')
    
    await page.goto(sauceDemoPage)
    await userNameField.fill('standard_user')
    await passwordField.fill('secret_sauce')
    await loginButton.click()
    await burgerMenuButton.click()
    
    expect (allItemsButton).toHaveText('All Items')
    expect (aboutButton).toHaveText('About')
    expect (logoutButton).toHaveText('Logout')
    expect (resetAppState).toHaveText('Reset App State')
})  

test('Validating “All Items” option in the Left menu', async ({ page }) => {
    let sauceDemoPage = 'https://www.saucedemo.com/'
    let userNameField = page.locator('input[id="user-name"]')
    let passwordField = page.locator('input[id="password"]')
    let loginButton = page.locator('input[id="login-button"]')
    let burgerMenuButton = page.locator('button[id="react-burger-menu-btn"]')
    let allItemsButton = page.locator('a[id="inventory_sidebar_link"]')
    
    await page.goto(sauceDemoPage)
    await userNameField.fill('standard_user')
    await passwordField.fill('secret_sauce')
    await loginButton.click()
    await burgerMenuButton.click()
    
    await allItemsButton.click()
    let expectedTitle = 'Products'
    let productTitle = page.locator('span[class="title"]')
    expect(productTitle).toHaveText(expectedTitle)
})  

test('Validating “About” option in the Left menu', async ({ page }) => {
    let sauceDemoPage = 'https://www.saucedemo.com/'
    let userNameField = page.locator('input[id="user-name"]')
    let passwordField = page.locator('input[id="password"]')
    let loginButton = page.locator('input[id="login-button"]')
    let burgerMenuButton = page.locator('button[id="react-burger-menu-btn"]')
    let aboutButton = page.locator('a[id="about_sidebar_link"]')
    
    await page.goto(sauceDemoPage)
    await userNameField.fill('standard_user')
    await passwordField.fill('secret_sauce')
    await loginButton.click()
    await burgerMenuButton.click()
    
    await aboutButton.click()
    let expectedUrl = "https://saucelabs.com/"
    let actualUrl = page.url()
    expect (actualUrl).toBe(expectedUrl)

})  

test('Validating “Logout” option in the Left menu', async ({ page }) => {
    let sauceDemoPage = 'https://www.saucedemo.com/'
    let userNameField = page.locator('input[id="user-name"]')
    let passwordField = page.locator('input[id="password"]')
    let loginButton = page.locator('input[id="login-button"]')
    let burgerMenuButton = page.locator('button[id="react-burger-menu-btn"]')
    let logoutButton = page.locator('a[id="logout_sidebar_link"]')
    
    await page.goto(sauceDemoPage)
    await userNameField.fill('standard_user')
    await passwordField.fill('secret_sauce')
    await loginButton.click()
    await burgerMenuButton.click()
    
    await logoutButton.click()
    let expectedUrl = 'https://www.saucedemo.com/'
    let actualUrl = page.url()
    expect (actualUrl).toBe(expectedUrl)
})  

test('Validating “Reset App State” option in the Left menu', async ({ page }) => {
    let sauceDemoPage = 'https://www.saucedemo.com/'
    let userNameField = page.locator('input[id="user-name"]')
    let passwordField = page.locator('input[id="password"]')
    let loginButton = page.locator('input[id="login-button"]')
    let burgerMenuButton = page.locator('button[id="react-burger-menu-btn"]')
    let resetAppState = page.locator('a[id="reset_sidebar_link"]')
    
    await page.goto(sauceDemoPage)
    await userNameField.fill('standard_user')
    await passwordField.fill('secret_sauce')
    await loginButton.click()
    await burgerMenuButton.click()
    
    await resetAppState.click()
    let expectedTitle = 'Products'
    let productTitle = page.locator('span[class="title"]')
    expect(productTitle).toHaveText(expectedTitle)
})  
