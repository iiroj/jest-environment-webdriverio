module.exports = {
  globalSetup: "<rootDir>/globalSetup.ts",
  globalTeardown: "<rootDir>/globalTeardown.ts",
  preset: "ts-jest",
  testEnvironment: "../index",
  testEnvironmentOptions: {
    port: 9515,
    path: "/",
    capabilities: {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless", "--disable-gpu"]
      }
    }
  }
};
