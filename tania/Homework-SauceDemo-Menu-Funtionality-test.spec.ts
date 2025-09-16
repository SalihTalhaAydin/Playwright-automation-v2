import { test, expect } from '@playwright/test'
test("Positive login functionality test", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.locator('input[data-test="username"]').fill('standard_user')
    await page.locator('input[data-test="password"]').fill('secret_sauce')
    await page.locator('input[class="submit-button btn_action"]').click()

    let menuButton = page.locator('button[id="react-burger-menu-btn"]')
    await expect(menuButton).toBeVisible()
    await menuButton.click()

    let allItems = page.locator('a[id="inventory_sidebar_link"]')
    let about = page.locator('a[id="about_sidebar_link"]')
    let logout = page.locator('a[id="logout_sidebar_link"]')
    let resetAppState = page.locator('a[id="reset_sidebar_link"]')
    await expect(allItems).toBeVisible()
    await expect(about).toBeVisible()
    await expect(logout).toBeVisible()
    await expect(resetAppState).toBeVisible()

    await allItems.click()
    expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    await about.click()
    await expect(page).toHaveURL('https://saucelabs.com/')

    await page.goBack()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await menuButton.click()
    await resetAppState.click()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    await menuButton.click()
    await logout.click()
    await expect(page).toHaveURL('https://www.saucedemo.com/')
})