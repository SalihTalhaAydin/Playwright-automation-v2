// user goes to Swag Labs
// user enters valid username
// user enters valid password.
// user click on login button.
// user is redirected to their homepage.

import { test, expect } from "@playwright/test";
test('Positive login test ', async ({ page }) => { 
    await page.locator('input[id="user-name"]').fill("problem_user");
    await page.waitForTimeout(2_000)
    await page.locator('input[id="password"]').fill("secret_sauce");
    await page.waitForTimeout(2_000);
    await page.locator('input[name="login-button"]').click()
    await page.waitForTimeout(2_000);
})