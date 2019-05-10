jest.setTimeout(60000);

describe("DuckDuckGo", (): void => {
  beforeEach(
    async (): Promise<void> => {
      await browser.reloadSession();
    }
  );

  it("short url should redirect", async (): Promise<void> => {
    await browser.url("https://duck.com");
    expect(await browser.getUrl()).toEqual("https://duckduckgo.com/");
  });

  it("should contain the Duck logo", async (): Promise<void> => {
    await browser.url("https://duckduckgo.com");
    const logo = await browser.$("a#logo_homepage_link");
    await logo.waitForExist();
    expect(await logo.getCSSProperty("background-image")).toMatchObject({
      property: "background-image",
      value:
        'url("https://duckduckgo.com/assets/logo_homepage.normal.v108.svg")'
    });
    expect(await logo.getText()).toContain("About DuckDuckGo");
  });
});
