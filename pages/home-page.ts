import { Page } from "@playwright/test";
import { testData } from "test-data/test-data";

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
      this.page = page;
  }

  async openHomepage() {
    await this.page.goto(testData.homePageData.homePageURL);
  }

  async verifyTitleText() {
    return this.page.getByTitle(testData.homePageData.homePageTitle);
  }
}
