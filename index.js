const pw = require('playwright');

/**
 * get screenshot
 * @param {string} engine
 * @returns {Promise<void>}
 */
const screenshot = async (engine) => {
  const browser = await pw[engine].launch();
  const context = await browser.newContext({
    viewport: {
      'width': 1024,
      'height': 768,
      'deviceScaleFactor': 1,
      'isMobile': true
    }
  });
  const page = await context.newPage();

  await page.goto('https://www.yahoo.co.jp', {waitUntil: 'load'});
  await page.screenshot({path: `example_${engine}.png`} );

  await browser.close();
};

(async () => {
  // Safariでスクショ
  await screenshot('webkit');
  console.log("safariおわりました");

  // Chromeでスクショ
  await screenshot('chromium');
  console.log("chromeおわりました");

  // Firefoxでスクショ
  await screenshot('firefox');
  console.log("firefoxおわりました");
})();
