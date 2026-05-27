import {test, expect } from '@playwright/test';
 
//const {test , expect } = required ('@playwright/test');
 
test ("verify title of the page",async ({page}) =>{
 
// await page.goto('https://www.google.com');
// await expect(page).toHaveTitle("Google");

await page.goto('http://demo.automationtesting.in/Alerts.html');
await page.locator("[class='nav nav-tabs nav-stacked'] li").nth(0).click();
await page.getByRole("button",{name:"    click the button to display an  alert box:"}).click();

 
});