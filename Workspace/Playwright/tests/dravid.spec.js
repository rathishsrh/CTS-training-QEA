import {test,expect} from '@playwright/test';
 
test('MiniProject', async ({page})=>{
 
    // console.log("Tested Ok");
    await page.goto('https://www.trivago.in/',{waitUntil:'domcontentloaded'});
    await page.locator('[data-testid="search-form-input"]').fill('Mumbai');
    // await page.pause();
    await page.locator('div ul[data-testid="auto-complete-suggestion-list"]').last().waitFor({ timeout: 10000 });
    await page.locator('div ul[data-testid="auto-complete-suggestion-list"]').nth(0).click();






    await page.waitForSelector('[data-testid="search-form-calendar-value"]', { timeout: 10000 });
    await page.locator('[data-testid="search-form-calendar-value"]').click();

    async function selectDateRange(page, checkInYear, checkInMonth, checkInDay, checkOutYear, checkOutMonth, checkOutDay) {
  // Open the calendar
  await page.locator('[data-testid="search-form-calendar"]').click();

  // Build selectors for both dates
  const checkInSelector = `[data-testid="valid-calendar-day-${checkInYear}-${String(checkInMonth).padStart(2, '0')}-${String(checkInDay).padStart(2, '0')}"]`;
  const checkOutSelector = `[data-testid="valid-calendar-day-${checkOutYear}-${String(checkOutMonth).padStart(2, '0')}-${String(checkOutDay).padStart(2, '0')}"]`;

  // Loop until check-in is visible
  for (let i = 0; i < 36; i++) {
    if (await page.locator(checkInSelector).isVisible()) break;
    await page.locator('[data-testid="calendar-button-next"]').click();
    await page.waitForTimeout(200);
  }

  // Click check-in
  await page.locator(checkInSelector).click();

  // Ensure check-out is visible (may require more navigation)
  for (let i = 0; i < 36; i++) {
    if (await page.locator(checkOutSelector).isVisible()) break;
    await page.locator('[data-testid="calendar-button-next"]').click();
    await page.waitForTimeout(200);
  }

  // Click check-out
  await page.locator(checkOutSelector).click();
}

// Select May 31, 2026 as check-in and June 5, 2026 as check-out
await selectDateRange(page, 2026, 7, 27, 2026, 7, 28);
    
    // await page.locator('[data-testid="calendar-button-next"] span').click();
    // await page.locator('[data-testid="calendar-button-next"] span').click();
    // await page.pause();
    // await page.locator('[data-testid="valid-calendar-day-2026-07-27"]').click();
    // await page.locator('[data-testid="valid-calendar-day-2026-07-28"]').click();




    await page.locator('[data-testid="search-form-guest-selector-value"]').click();
    await page.locator('[data-testid="adults-amount-minus-button"]').click();
    // await page.locator('#_r_10_').fill('1');
    await page.locator('button:has-text("Apply")').click();
    await page.locator('button._3tjlp_').click();
    await page.locator("button[title='Featured stays'] span[class='bam52s kiDoyt']")
    await page.locator('#_r_6h_').selectOption({label:"#_r_i7_"});
    await page.locator('button.VHolYY.tjDLq2.e4r_YY').click();
    let hotels=page.locator('ol.PNIRi0:visible');
    await hotels.last().waitFor();
 
    let price=await page.locator('[data-testid="recommended-price"]').allTextContents();
    console.log("Prices:", price);
 
    let ratings = await page.locator('[data-testid="aggregate-rating"] span span').allTextContents()
    for(let i=0;i<hotels.count();i++)
    {
        expect(ratings[i]).toBeGreaterThan(ratings[i+1]);
    }
 
 
    for(let i=1; i<=5;i++)
    {
        await hotels.nth(i).click();
        await page.locator('[data-testid="tab-wrapper"]').click();
        let loc = await page.locator('[data-testid*="location-accommodation-address"]').textContent();
        let bool = loc.toLocaleLowerCase().includes('mumbai');
        expect(bool).toBeTruthy();

    }
   
})







// //Booking.com

// import {test,expect} from '@playwright/test';

// test("Booking Website", async ({page})=>{

//   await page.goto("https://www.booking.com/")

//   await page.locator(".de576f5064.b46cd7aad7.e26a59bb37.c295306d66.c7a901b0e7.daf5d4cb1c.e7f2b1a356").click();

//   let place="pondicherry";
//   let checkin="2026-05-12";
//   let checkout="2026-05-13";
//   await page.getByRole("combobox", {name:"Where are you going?"}).pressSequentially(place);
//   // await page.getByRole("option").first().waitFor();
//   await page.getByRole("option",{name:"puducherry"}).nth(0).click()

//   // await page.locator('[data-testid="searchbox-dates-container"]').click();
//   await page.locator('[data-date='+`'${checkin}'`+']').click();
//   await page.locator('[data-date='+`'${checkout}'`+']').click();

//   await page.locator('[data-testid="occupancy-config"]').click();
//   await page.locator('.e301a14002 button').nth(1).click();
//   await page.locator('.e301a14002 button').nth(1).click();
//   await page.locator('.e301a14002 button').last().click();

//   await page.getByRole("button", {name:"Done"}).click();

//   await page.getByRole("button", {name:"Search"}).click();
//   // await page.pause()


  // await page.getByTestId('sorters-dropdown-trigger').waitFor({ state: "attached" });
  // await page.locator(".de576f5064.fcd8e16f81").click();
  // await page.locator(".a9777a23af").waitFor({ state: "attached" });
  // await page.locator(".a9777a23af").filter({hasText:"Price (lowest first)"}).click();
  // await page.getByTestId('sorters-dropdown-trigger').click();
  // await page.locator(".a9777a23af").filter({hasText:"Price (lowest first)"}).click();
// await page.getByTestId('sorters-dropdown-trigger').click();
// // await page.waitForSelector(getByRole('option', { name: 'Property rating (high to low)' }));
// // await page.getByRole('option', { name: 'Property rating (high to low)' }).click();

// await page.locator('[id="filter_group_popular_:rp:"] label').filter({ hasText: 'Swimming pool' }).click();
// await page.locator('[id="filter_group_popular_:rp:"]').getByText('Resorts').click()


// });