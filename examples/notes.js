const url = `https://www.psacard.com/cert/${id}`;
const page = await browser.newPage();
await page.goto(url, {
  waitUntil: "load",
});
await page.waitForTimeout(5000);
await page.screenshot({ path: "testresult.png", fullPage: true });
await browser.close();
console.log(`All done, check the screenshot. ✨`);
