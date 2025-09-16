import { test, expect } from '@playwright/test';


test('Testing Sauce login page', async ({ page }) => {
     
     await page.goto('https://www.saucedemo.com/');
     let loginInput = page.locator('div[class="form_group"] [id="user-name"]');
     await loginInput.type("locked_out_user")
     await page.waitForTimeout(2_000)

     let passwordInput = page.locator('div[class="form_group"] [id="password"]');
     await passwordInput.type("secret_sauce")
     await page.waitForTimeout(2_000)

     let loginbutton = page.locator('div[id="login_button_container"] [id="login-button"]');
     await loginbutton.press("Enter");
     await page.waitForTimeout(2_000)

     let errMessage = await page.locator('h3[data-test="error"]').innerText();
    
     let expectedErrMessage= "Epic sadface: Sorry, this user has been locked out.";

    expect (errMessage).toBe(expectedErrMessage);
});