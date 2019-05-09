module.exports = {
  preset: "ts-jest",
  testEnvironment: "./index",
  testEnvironmentOptions: {
    port: 9515,
    path: "/",
    capabilities: {
      browserName: "chrome"
    }
  }
};
