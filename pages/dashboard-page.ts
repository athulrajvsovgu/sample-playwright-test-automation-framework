import { Page } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyURL(): Promise<string> {
    return this.page.url();
  }

  async goToHeroesPage() {
    await this.page.click('a[routerlink="/heroesfehaeha"]');
  }

  async returnToDashboardPage() {
    await this.page.click('a[routerlink="/dashboard"]');
  }

  async goToCeleritasPage() {
    await this.page.getByText('Celeritas').click();
  }

  async goToMagnetaPage() {
    await this.page.getByText('Magneta').click();
  }

  async goToRubbermanPage() {
    await this.page.getByText('Rubberman').click();
  }

  async goToBombastoPage() {
    await this.page.getByText('Bombasto').click();
  }
}
