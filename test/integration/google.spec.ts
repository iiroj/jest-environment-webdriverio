jest.setTimeout(60000);

describe("Google", (): void => {
  beforeEach(
    async (): Promise<void> => {
      await browser.reloadSession();
    }
  );

  it("should contain the Google logo", async (): Promise<void> => {
    await browser.url("https://www.google.com");
    const logo = await browser.$("img[alt=Google]");
    await logo.waitForExist();
    expect(await logo.getProperty("src")).toEqual(
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    );
  });
});
