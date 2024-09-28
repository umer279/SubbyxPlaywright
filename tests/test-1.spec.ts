import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.subbyx.com/');

  const cookieButton = await page.waitForSelector('button:has-text("Accept")'); //getByRole('button', { name: 'Accept' })
  cookieButton.click();

  const avantiButton = await page.waitForSelector('button:has-text("Avanti")')

  await page.getByRole('link', { name: 'SubbyxMatch', exact: true }).click();
  await page.getByText('Vai, iniziamo!').click();
  await page.getByText('Smartphone').click();
  avantiButton.click();
  await page.getByText('Mi informo, so esattamente cosa vorrei').click();
  avantiButton.click();
  await page.getByText('Android').click();
  avantiButton.click();
  await page.getByText('Faccio molte foto e video').click();
  avantiButton.click();
  await page.getByText('Vorrei spendere poco').click();
  avantiButton.click();
  await page.getByText('Scopri i Match').click();
  await expect(page.getByRole('button', { name: 'Product motorola motorola edge 40 🌱 PreLoved € 15.19 /mese o € 10.18 con' })).toBeVisible();
});
