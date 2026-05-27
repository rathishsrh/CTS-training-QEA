import {test,expect} from '@playwright/test';

//Handling - Alert OK
test("Handle Alert", async ({page})=>{

    await page.goto('http://demo.automationtesting.in/Alerts.html');
    await page.click('text=Alert with OK');

    page.once('dialog', async dialog=>{
        expect(dialog.message()).toContain('alert');
        await dialog.accept();
        console.log("Alert accepted");
    })
    await page.getByRole('button', { name: 'click the button to display an  alert box:' }).click();

})



//Handling - Confirm Box
test("Handle Confirm", async ({page})=>{

    await page.goto('http://demo.automationtesting.in/Alerts.html');
    await page.click('text=Alert with OK & Cancel');

    page.once('dialog', async dialog=>{
        await dialog.dismiss();
        console.log("Confirm dismissed");
    })
    await page.getByRole('button', { name: 'click the button to display a confirm box ' }).click();

    await expect(page.locator('#demo')).toHaveText('You Pressed Cancel'); 
    console.log("Confirmed text:", await page.locator('#demo').textContent()); //Print the textcontent inside the <p id='demo'> tag
})


//Handling - Prompt Input
test("Handle Prompt", async ({page})=>{

    await page.goto('http://demo.automationtesting.in/Alerts.html');
    await page.click('text=Alert with Textbox ');

    let myname='rath';
    page.once('dialog', async dialog=>{
       await dialog.accept(myname);
       console.log(`Prompt accepted with the name: ${myname}`);
    })
    await page.getByRole('button', { name: 'click the button to demonstrate the prompt box ' }).click();

    await expect(page.locator('#demo1')).toHaveText(`Hello ${myname} How are you today`);
    console.log("Prompt result text:", await page.locator('#demo1').textContent());  //Print the textcontent inside the <p id='demo1'> tag   
})


