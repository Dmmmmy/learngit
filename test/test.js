const puppeteer = require('puppeteer');
/*
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.tracing.start({path: 'trace.json', categories: ['devtools.timeline']})
  await page.goto('https://news.ycombinator.com/news')

  // execute standard javascript in the context of the page.
  const stories = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('a.storylink'))
    return anchors.map(anchor => anchor.textContent).slice(0, 10)
  })
  console.log(stories)
  await page.tracing.stop();
  await browser.close()
})()
*/
(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://news.ycombinator.com/news')
    const name = await page.evaluate(() => document.querySelector('.hnname > a').innerText)
    console.log(name)
    await browser.close()
  })()