import { test, expect } from "@playwright/test";
test('Positive login test ', async ({ page }) => { 
    await page.goto("https://www.saucedemo.com/");
    await page.locator('input[id="user-name"]').fill("problem_user");
    await page.locator('input[id="password"]').fill("secret_sauce");
    await page.locator('input[name="login-button"]').click()
    let expectedText = "Swag Labs";
    let title = page.locator('div[class="app_logo"]');
    expect(title).toHaveText(expectedText);
})