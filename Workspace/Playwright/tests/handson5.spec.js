import {test,expect} from '@playwright/test';

test("Google Search for the text Cognizant and retrieve the search results and transaction time",async ({page})=>{

    await page.goto("https://www.google.com");

    await page.screenshot({path:"C:/Users/2489635/OneDrive - Cognizant/Pictures/Screenshots/sc2.png"})
    await page.waitForTimeout(2000)

    expect( page.locator('.lnXdpd') ).toBeVisible();
    await page.locator('.lnXdpd').screenshot({path:"C:/Users/2489635/OneDrive - Cognizant/Pictures/Screenshots/sc3.png"})
    await page.waitForTimeout(2000)

    await page.locator('.gLFyf').fill('cognizant');
    await page.keyboard.press("enter");
    await page.screenshot({path:"C:/Users/2489635/OneDrive - Cognizant/Pictures/Screenshots/sc4.png"})

    

})