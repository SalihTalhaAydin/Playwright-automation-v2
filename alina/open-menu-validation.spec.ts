import { test, expect } from "@playwright/test";
test("Open Menu -All Items - Validation", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('input[id="user-name"]').fill("standard_user");
    await page.locator('input[id="password"]').fill("secret_sauce");
    await page.locator('input[id="login-button"]').click();
    await page.locator('button[id="react-burger-menu-btn"]').click();
    await page.locator('a[id="inventory_sidebar_link"]');
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
})

   
test("Open Menu -About - Validation", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('input[id="user-name"]').fill("standard_user");
    await page.locator('input[id="password"]').fill("secret_sauce");
    await page.locator('input[id="login-button"]').click();
    await page.locator('button[id="react-burger-menu-btn"]').click();
    await page.locator('a[id="about_sidebar_link"]').click();
    await expect(page).toHaveURL("https://saucelabs.com/");
})
test("Open Menu -Logout - Validation", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('input[id="user-name"]').fill("standard_user");
    await page.locator('input[id="password"]').fill("secret_sauce");
    await page.locator('input[id="login-button"]').click();
    await page.locator('button[id="react-burger-menu-btn"]').click();
    await page.locator('a[id="logout_sidebar_link"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/");
})

test("Open Menu -Reset App State - Validation", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('input[id="user-name"]').fill("standard_user");
    await page.locator('input[id="password"]').fill("secret_sauce");
    await page.locator('input[id="login-button"]').click();
    await page.locator('button[id="react-burger-menu-btn"]').click();
    await page.locator('a[id="reset_sidebar_link"]').click();
    
})


       





     
