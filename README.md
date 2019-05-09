# jest-environment-webdriverio

[![CircleCI](https://circleci.com/gh/iiroj/jest-environment-webdriverio.svg?style=shield)](https://circleci.com/gh/iiroj/jest-environment-webdriverio)
[![version](https://img.shields.io/npm/v/jest-environment-webdriverio.svg)](https://www.npmjs.com/package/jest-environment-webdriverio)
[![code size](https://img.shields.io/github/languages/code-size/iiroj/jest-environment-webdriverio.svg)](https://github.com/iiroj/jest-environment-webdriverio)
[![dependencies](https://img.shields.io/david/iiroj/jest-environment-webdriverio.svg)](https://github.com/iiroj/jest-environment-webdriverio/blob/master/package.json)
[![devDependencies](https://img.shields.io/david/dev/iiroj/jest-environment-webdriverio.svg)](https://github.com/iiroj/jest-environment-webdriverio/blob/master/package.json)

Run your tests using [Jest](https://jestjs.io) and WebdriverIO

---

# Installation

**Using npm:**
```sh
npm install --save-dev jest-environment-webdriverio
```

**Using yarn:**
```sh
yarn add --dev jest-environment-webdriverio
```

Set `jest-environment-webdriverio` as the `testEnvironment` in your [Jest configuration](https://jestjs.io/docs/en/configuration). Additionally, specify any [WebdriverIO options](https://webdriver.io/docs/options.html) in `testEnvironmentOptions`:

```js
// jest.config.js
module.exports = {
  testEnvironment: "jest-environment-webdriverio",
  testEnvironmentOptions: {
    host: "hub.crossbrowsertesting.com",
    port: 80,
    user: "<username>",
    key: "<authkey>",
    desiredCapabilities: {
      name: "Jest -> WebdriverIO -> CrossBrowserTesting",
      platform: "Windows 7",
      browserName: "ie",
      version: "11",
      record_video: "true",
      record_network: "true"
    }
  }
};
```

## Usage

You are now ready to use [WebdriverIO's global `browser`, `$`, and `$$` methods](https://webdriver.io/docs/api.html) in your tests. Be sure to use the `async/await` syntax:

```js
// google.spec.js
describe("DuckDuckGo", async () => {
  it("should contain the Duck logo", () => {
    await browser.url("https://duck.com");
    const logo = await $("a#logo_homepage_link");
    await logo.waitForExist();
    expect(await browser.getUrl()).toEqual("https://duckduckgo.com")
    expect(await logo.getCSSProperty('background-image')).toContain(".svg");
    expect(await logo.getText()).toContain("About DuckDuckGo");
  });
});
```
