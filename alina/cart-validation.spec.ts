import { test, expect } from "@playwright/test";
test("Cart functionality", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('input[id="user-name"]').fill("standard_user");
  await page.locator('input[id="password"]').fill("secret_sauce");
  await page.locator('input[id="login-button"]').click();
  await page.locator('a[class="shopping_cart_link"]').click();
  let expectedText = "Your Cart";
  let cartTitle = page.locator('span[class="title"]');
  expect(cartTitle).toHaveText(expectedText);
});
