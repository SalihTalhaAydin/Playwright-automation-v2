import { test, expect } from '@playwright/test';

const baseUrl = 'https://www.saucedemo.com/';
const userNameInputLocator = 'input[id="user-name"]'
const passwordInputLocator = 'input[id="password"]'
const loginButtonLocator = 'input[id="login-button"]'
const cardHeader = 'span[class="title"]'

test.beforeEach(async ({ page }) => {
  await page.goto(baseUrl);
});

test('Sauce cart automation', async ({ page }) => {

  await page.locator(userNameInputLocator).fill('standard_user');
  await page.locator(passwordInputLocator).fill('secret_sauce');
  await page.locator(loginButtonLocator).click();

  await page.locator('.shopping_cart_link').click();

  
  const expectedText = 'Your Cart';
  const cartTitle = page.locator(cardHeader);
  await expect(cartTitle).toHaveText(expectedText);
});