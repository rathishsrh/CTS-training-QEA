import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.trivago.in/');
  await page.getByTestId('uc-footer').getByRole('button', { name: 'OK' }).click();
  await page.getByTestId('search-form-input').click();
  await page.getByTestId('search-form-input').fill('mum');
  await page.locator('span').filter({ hasText: 'Mumbai' }).first().click();
  await page.getByTestId('calendar-button-next').click();
  await page.getByTestId('calendar-button-next').click();
  await page.getByTestId('valid-calendar-day-2026-07-27').click();
  await page.getByTestId('valid-calendar-day-2026-07-28').click();
  await page.getByTestId('adults-amount-minus-button').click();
  await page.getByTestId('guest-selector-apply').click();
});