// import test from "@playwright/test";\
const { test, expect } = require('@playwright/test');


test("Verify credentials", async ({page})=>{

    await page.goto("https://www.saucedemo.com",{waitUntil:'networkidle'});
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    // await page.waitForLoadState('domcontentloaded')

    await page.screenshot({path:"C:/Users/2489635/OneDrive - Cognizant/Pictures/Screenshots/handson3.png", fullpage:true})

})