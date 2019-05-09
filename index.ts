import NodeEnvironment from "jest-environment-node";
import webdriverio from "webdriverio";

declare global {
  namespace NodeJS {
    interface Global {
      browser: webdriverio.Browser;
      remote: typeof webdriverio.remote;
    }
  }
}

export type Options = ConstructorParameters<typeof NodeEnvironment>[0];

export type TestEnvironmentOptions = Parameters<
  typeof webdriverio["remote"]
>[0];

export default class WebdriverIOEnvironment extends NodeEnvironment {
  public options: TestEnvironmentOptions;

  public constructor(options: Options) {
    super(options);
    this.options = options.testEnvironmentOptions;
  }

  public async setup(): Promise<void> {
    await super.setup();
    this.global.remote = webdriverio.remote;
    this.global.browser = await this.global.remote(this.options);
  }

  public async teardown(): Promise<void> {
    await super.teardown();
  }
}
