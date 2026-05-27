import {test,expect} from '@playwright/test';

test("Hands on 4 - test1", async({page})=>{

    await page.goto('https://www.google.com');

    const logo=page.locator('.lnXdpd');
    await expect(logo).toBeVisible();

    let searchBox=page.locator('.gLFyf');
    await expect(searchBox).toBeVisible();

    let btn=page.locator('.bvUkz');
    await expect(btn).toBeVisible();

})


test("Hands on 4 - test2", async({page})=>{

    await page.goto('https://onecognizant.cognizant.com/Home');

    const trutime=page.locator('#btn0');
    await expect(trutime).toBeVisible();
    
    const time=page.locator('.worldClockDate text-truncate');
    await expect(time).toBeVisible();

    const monavg=page.locator('#A2');
    await expect(monavg).toBeVisible();

    const yearavg=page.locator('#A3');
    await expect(yearavg).toBeVisible();



})