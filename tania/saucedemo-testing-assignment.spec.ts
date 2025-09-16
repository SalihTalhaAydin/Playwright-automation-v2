import { test, expect } from '@playwright/test'
test("Positive login functionality test", async ({page}) => {

// //Happy -> valid username, password


// user goes to Swag Labs
await page.goto("https://www.saucedemo.com/")
// user enters valid username
await page.locator('input[data-test="username"]').fill('standard_user')
// user enters valid password.
await page.locator('input[id="user-name"]').fill('secret_sauce')
// user click on login button.
await page.locator('input[class="submit-button btn_action"]').click()
// user is redirected to their homepage.
 let titleLocator = page.locator('span[class="title"]');
  await expect(titleLocator).toHaveText('Products')
}) 