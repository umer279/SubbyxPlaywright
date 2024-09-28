const { test } = require('@playwright/test');
const SubbyxMatchPage = require('../pages/subbyXMatchPage')

test('SubbyXMatch simple flow', async ({ page }) => {
   await page.goto('https://www.subbyx.com/match')
   const subbyxMatch = new SubbyxMatchPage(page)
   await subbyxMatch.subbyxMatchSimpleFlow() 
   await subbyxMatch.verifyMatch()
});
  