import {test,expect} from '@playwright/test';

test("Verify signinlink of reddif", async({page})=>{

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');
    await page.selectOption('#country',{label:"Australia"})
    await page.waitForTimeout(5000);

    let countries=await page.$$('#country option');
    console.log(countries);

    

});