import chromedriver from "chromedriver";

export default async (): Promise<void> => {
  await chromedriver.start();
};
