const puppeteer = require("puppeteer");
const fs = require("fs-extra");

const devices = require("puppeteer/DeviceDescriptors");
// https://github.com/GoogleChrome/puppeteer/blob/v1.6.2/docs/api.md#pageemulateoptions
const PHONE_TYPE = "iPhone 6";
const iPhone = devices[PHONE_TYPE];

const TDAS = require("./client/src/constants").TDAS;

const getDesktopPhotos = async () => {
  const browser = await puppeteer.launch();
  for (let tda of TDAS) {
    try {
      const page = await browser.newPage();
      page.setViewport({ width: 1024, height: 2000 });
      console.log(`fetching ... ${tda} ... desktop`);
      await page.goto(`https://www.buyatoyota.com/${tda}`, {
        waitUntil: "networkidle2"
      });
      await page.screenshot({
        path: `${__dirname}\\public\\images\\${tda}-desktop.jpg`
      });
    } catch (e) {
      await getNotFoundImage(`${tda}-desktop`);
    }
  }
  await browser.close();
};

const getMobilePhotos = async () => {
  const browser = await puppeteer.launch();
  for (let tda of TDAS) {
    try {
      const page = await browser.newPage();
      await page.emulate(iPhone);
      console.log(`fetching ... ${tda} ... ${PHONE_TYPE}`);

      await page.goto(`https://www.buyatoyota.com/${tda}`, {
        waitUntil: "networkidle2"
      });
      await page.screenshot({
        path: `${__dirname}\\public\\images\\${tda}-mobile.jpg`
      });
    } catch (e) {
      await getNotFoundImage(`${tda}-mobile`);
    }
  }
  await browser.close();
};

const getNotFoundImage = name => {
  const from = `${__dirname}\\image-not-found.jpg`;
  const to = `${__dirname}\\public\\images\\${name}.jpg`;

  return fs
    .copy(from, to)
    .then(() => console.log("success!"))
    .catch(err => console.error(err));
};

const start = async () => {
  console.log("start....");
};

Promise.all([start(), getDesktopPhotos(), getMobilePhotos()])
  .then(() => console.log("done"))
  .catch(e => console.log(e));