import { test, expect } from '@playwright/test'

test('Positive sauce demo login functionality', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('input[id="user-name"]').fill('283457621983746')
    await page.locator('input[id="password"]').fill('                ')
    await page.locator('input[id="login-button"]').click()

     let errMessage = await page.locator('h3[data-test="error"]')
     let errMessTxt = await errMessage.innerText();
    
     let expectedErrMessage= "Epic sadface: Sorry, this user has been locked out.";

        expect(errMessage).toHaveText(expectedErrMessage)
});