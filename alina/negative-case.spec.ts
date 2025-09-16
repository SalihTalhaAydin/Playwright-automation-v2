import { test, expect } from '@playwright/test'
test('Negative sauce demo login functionality', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('input[id="user-name"]').fill('standard_user')
    await page.locator('input[id="password"]').fill('')
    await page.locator('input[id="login-button"]').click()
    let expectedMessage = 'Epic sadface: username and passwords do not match in this service';
    let errorTitle = page.locator('h3[data-test="error"]');
    expect(errorTitle).toHaveText(expectedMessage)
})


test("Negative test 2 sauce demo login functionality", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('input[id="user-name"]').fill("");
  await page.locator('input[id="password"]').fill("secret_sauce");
  await page.locator('input[id="login-button"]').click();
  let expectedMessage1 =
    "Epic sadface: username and passwords do not match in this service";
  let errorTitle2 = page.locator('h3[data-test="error"]');
    expect(errorTitle2).toHaveText(expectedMessage1);
    await page.waitForTimeout(5_000)
});

test("Negative test 3 sauce demo login functionality", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('input[id="user-name"]').fill("wsrfdtgfyhuj");
  await page.locator('input[id="password"]').fill("secretsauceeeeeee");
  await page.locator('input[id="login-button"]').click();
  let expectedMessage1 =
    "Epic sadface: username and passwords do not match in this service";
  let errorTitle2 = page.locator('h3[data-test="error"]');
  expect(errorTitle2).toHaveText(expectedMessage1);
  await page.waitForTimeout(5_000);
});

