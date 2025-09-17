import { test, expect } from "@playwright/test";
let baseUrl = "https://www.saucedemo.com/";
let userNameInputLocator = 'input[id="user-name"]';
let passswordInputLocator = 'input[id="password"]';
let loginButton = 'input[id="login-button"]';
let cartIcon = 'a[class="shopping_cart_link"]';
let cartTitleLocator = 'span[class="title"]';
test("Cart functionality", async ({ page }) => {
  await page.goto(baseUrl);
  await page.locator(userNameInputLocator).fill("standard_user");
  await page.locator(passswordInputLocator).fill("secret_sauce");
  await page.locator(loginButton).click();
  await page.locator(cartIcon).click();
  let expectedText = "Your Cart";
  let cartTitle = page.locator(cartTitleLocator);
  expect(cartTitle).toHaveText(expectedText);
});
