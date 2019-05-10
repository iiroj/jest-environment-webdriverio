import NodeEnvironment from "jest-environment-node";
import * as webdriverio from "webdriverio";

declare global {
  namespace NodeJS {
    interface Global {
      browser: typeof browser;
      $: typeof $;
      $$: typeof $$;
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
    this.global.$ = this.global.browser.$;
    this.global.$$ = this.global.browser.$$;
  }

  public async teardown(): Promise<void> {
    if (this.global.browser) {
      await this.global.browser.deleteSession();
    }

    await super.teardown();
  }
}
