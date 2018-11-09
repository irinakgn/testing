const puppeteer = require("puppeteer");
const fs = require("fs-extra");

const devices = require("puppeteer/DeviceDescriptors");
// https://github.com/GoogleChrome/puppeteer/blob/v1.6.2/docs/api.md#pageemulateoptions
const PHONE_TYPE = "iPhone 6";
const iPhone = devices[PHONE_TYPE];

const {TDAS, vehicleCodes} = require("./client/src/constants");



const getCarOffersDesktop = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  for (let tda of TDAS) {
    for (const vehicleCode of vehicleCodes) {
      try {
        console.log(`fetching ... ${tda} ... vehicles`);
        await page.goto(`https://www.buyatoyota.com/${tda}/offers/${vehicleCode}/`, {
          await: page.waitFor(10000)
        });
        await page.screenshot({
          path: `${__dirname}\\client\\public\\images\\${tda}-${vehicleCode}-offer-desktop.jpg`
        });
      } catch (e) {
        await getNotFoundImage(`${vehicleCode}-${tda}-desktop`);
      }
    }
  }
  await browser.close();
}

const getCarOffersMobile = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  for (let tda of TDAS) {
    for (const vehicleCode of vehicleCodes) {
      try {

        await page.emulate(iPhone);
        console.log(`fetching ... ${tda} ... ${PHONE_TYPE}`);

        await page.goto(`https://www.buyatoyota.com/${tda}/offers/${vehicleCode}/`, {
          await: page.waitFor(10000)
        });
        await page.screenshot({
          path: `${__dirname}\\client\\public\\images\\${tda}-${vehicleCode}-offer-mobile.jpg`
        });


      } catch (e) {
        await getNotFoundImage(`${vehicleCode}-${tda}-desktop`);
      }
    }
  }
  await browser.close();
}

const getCarsDesktop = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  for (let tda of TDAS) {
    for (const vehicleCode of vehicleCodes) {
      try {
        console.log(`fetching ... ${tda} ... vehicles`);
        await page.goto(`https://www.buyatoyota.com/${tda}/vehicles/${vehicleCode}/`, {
          await: page.waitFor(10000)
        });
        await page.screenshot({
          path: `${__dirname}\\client\\public\\images\\${tda}-${vehicleCode}-desktop.jpg`
        });
      } catch (e) {
        await getNotFoundImage(`${vehicleCode}-${tda}-desktop`);
      }
    }
  }
  await browser.close();
}

const getCarsMobile = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  for (let tda of TDAS) {
    for (const vehicleCode of vehicleCodes) {
      try {

        await page.emulate(iPhone);
        console.log(`fetching ... ${tda} ... ${PHONE_TYPE}`);

        await page.goto(`https://www.buyatoyota.com/${tda}/vehicles/${vehicleCode}/`, {
          await: page.waitFor(10000)
        });
        await page.screenshot({
          path: `${__dirname}\\client\\public\\images\\${tda}-${vehicleCode}-mobile.jpg`
        });


      } catch (e) {
        await getNotFoundImage(`${vehicleCode}-${tda}-desktop`);
      }
    }
  }
  await browser.close();
}

const getNotFoundImage = name => {
  const from = `${__dirname}\\image-not-found.jpg`;
  const to = `${__dirname}\\client\\public\\images\\${name}.jpg`;

  return fs
    .copy(from, to)
    .then(() => console.log(` failed to download ${name}`))
    .catch(err => console.error(err));
};

const start = async () => {
  console.log("start....");
};

const getDesktopHomePage = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  for (const tda of TDAS) {
    try {
      console.log(`fetching ... ${tda} ... desktop`);
      await page.goto(`https://www.buyatoyota.com/${tda}`, {
        await: page.waitFor(10000)
      });
      await page.screenshot({
        path: `${__dirname}\\client\\public\\images\\${tda}-desktop-homepage.jpg`
      });
    } catch (e) {
      await getNotFoundImage(`${tda}-desktop`);
    }
  }
  await browser.close();
};


const getMobileHomePage = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  for (let tda of TDAS) {
    try {
      await page.emulate(iPhone);
      console.log(`fetching ... ${tda} ... ${PHONE_TYPE}`);

      await page.goto(`https://www.buyatoyota.com/${tda}`, {
        await: page.waitFor(10000)
      });
      await page.screenshot({
        path: `${__dirname}\\client\\public\\images\\${tda}-mobile-homepage.jpg`
      });
    } catch (e) {
      await getNotFoundImage(`${tda}-mobile`);
    }
  }
  await browser.close();
};


const getMobileOffers = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  for (let tda of TDAS) {
    try {
      await page.emulate(iPhone);
      console.log(`fetching ... ${tda} ... ${PHONE_TYPE}`);

      await page.goto(`https://www.buyatoyota.com/${tda}/offers`, {
        await: page.waitFor(10000)
      });
      await page.screenshot({
        path: `${__dirname}\\client\\public\\images\\${tda}-mobile-offers.jpg`
      });
    } catch (e) {
      await getNotFoundImage(`${tda}-mobileOffers`);
    }
  }
  await browser.close();
};

const getDesktopOffers = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  for (let tda of TDAS) {
    try {
      console.log(`fetching ... ${tda} ... offers`);
      await page.goto(`https://www.buyatoyota.com/${tda}/offers`, {
        await: page.waitFor(10000)
      });
      await page.screenshot({
        path: `${__dirname}\\client\\public\\images\\${tda}-desktop-offers.jpg`
      });
    } catch (e) {
      await getNotFoundImage(`${tda}-offers`);
    }
  }
  await browser.close();
};

const callStack = [];

// callStack.push(start())
callStack.push(getCarOffersDesktop());
callStack.push(getCarOffersMobile());
callStack.push(getCarsDesktop());
callStack.push(getCarsMobile());
callStack.push(getDesktopHomePage());
callStack.push(getMobileHomePage());
callStack.push(getMobileOffers());
callStack.push(getDesktopOffers());

Promise.all(callStack).then(() => console.log("done")).catch(e => console.log(e));

