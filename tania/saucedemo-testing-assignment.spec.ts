import { test, expect } from '@playwright/test'
test("Positive login functionality test", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.locator('input[data-test="username"]').fill('standard_user')
    await page.locator('input[data-test="password"]').fill('secret_sauce')
    await page.locator('input[class="submit-button btn_action"]').click()
    let expectedText = "Products"
    let titleLocator = page.locator('span[class="title"]');
    await expect(titleLocator).toHaveText(expectedText)
}) 