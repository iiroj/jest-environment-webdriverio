describe("DuckDuckGo", (): void => {
  it("should contain the Duck logo", async (): Promise<void> => {
    await browser.url("https://duck.com");
    const logo = await $("a#logo_homepage_link");
    await logo.waitForExist();
    expect(await browser.getUrl()).toEqual("https://duckduckgo.com");
    expect(await logo.getCSSProperty("background-image")).toContain(".svg");
    expect(await logo.getText()).toContain("About DuckDuckGo");
  });
});
