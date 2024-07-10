import {test} from '@playwright/test';
//@test is  coming from playwright package
 test("first test case", async({page})=>
    {
     await page.waitForTimeout(5000)
     await page.goto("https://playwright.dev/docs/api/class-fixtures")
     await page.waitForTimeout(5000)
    }
 )
 test("second test case", async({browser})=>
 {
    // launch the browser
   const context=await browser.newContext();
    // open the page
   const page1=await context.newPage();
   //launch the url
   await page1.waitForTimeout(5000)
   await page1.goto("https://drive.google.com/drive/home")
   await page1.waitForTimeout(5000)
   await page1.goto("https://playwright.dev/docs/api/class-fixtures")

 })
 test("third browser", async({browser, page})=>
{
    await page.goto("https://playwright.dev/docs/api/class-fixtures")
     await page.waitForTimeout(5000)
    // launch the browser
   const context=await browser.newContext();
   // open the page
  const page1=await context.newPage();
  //launch the url
  await page.waitForTimeout(5000)
  await page1.goto("https://drive.google.com/drive/home")
  await page.waitForTimeout(5000)



} )
