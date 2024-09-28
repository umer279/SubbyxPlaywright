import { test } from '@playwright/test';
import SubbyxMatchPage from '../pages/subbyXMatchPage';
const { authorize, getOTP } = require('../apis/gmailService');

test('SubbyXMatch simple flow', async ({ page }) => {
   await page.goto('https://www.subbyx.com/match')
   const subbyxMatch = new SubbyxMatchPage(page)
   await subbyxMatch.subbyxMatchSimpleFlow() 
   await subbyxMatch.verifyMatch()

   /* //get OTP from GMAIL API
   const auth = await authorize();
   const otp = await getOTP(auth);
   console.log('OTP:', otp);
   */

});