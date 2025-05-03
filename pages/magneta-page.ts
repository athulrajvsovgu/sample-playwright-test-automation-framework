import { Page } from "@playwright/test";

export class MagnetaPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyURL(): Promise<string> {
        return this.page.url();
    }
}
