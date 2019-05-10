jest.setTimeout(60000);

describe("Google", (): void => {
  beforeEach(
    async (): Promise<void> => {
      await browser.reloadSession();
    }
  );

  it("should contain the Google logo", async (): Promise<void> => {
    await browser.url("https://www.google.com");
    const title = await browser.getTitle();
    expect(title).toEqual("Google");
  });
});
