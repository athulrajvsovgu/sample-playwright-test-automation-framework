import { BombastoPage } from 'pages/bombasto-page';
import { CeleritasPage } from 'pages/celeritas-page';
import { DashboardPage } from 'pages/dashboard-page';
import { HeroesPage } from 'pages/heroes-page';
import { HomePage } from 'pages/home-page';
import { MagnetaPage } from 'pages/magneta-page';
import { RubbermanPage } from 'pages/rubberman-page';
import { testData } from 'test-data/test-data';
import { test, expect } from "playwright-test-coverage";

test.describe('navigation', () => {
  let homePage: HomePage;
  let dashboardPage: DashboardPage;
  let heroesPage: HeroesPage;
  let bombastoPage: BombastoPage;
  let celeritasPage: CeleritasPage;
  let magnetaPage: MagnetaPage;
  let rubbermanPage: RubbermanPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    dashboardPage = new DashboardPage(page);
    heroesPage = new HeroesPage(page);
    bombastoPage = new BombastoPage(page);
    celeritasPage = new CeleritasPage(page);
    magnetaPage = new MagnetaPage(page);
    rubbermanPage = new RubbermanPage(page);
    await homePage.openHomepage();
  });

  test('test home page (dashboard) contents', async () => {
    await expect(homePage.verifyTitleText()).toBeDefined();
    const dashboardPageURL = await dashboardPage.verifyURL();
    await expect(dashboardPageURL).toContain(
      testData.dashboardPageData.verifyInURL
    );
  });

  test('test heroes page contents', async () => {
    await dashboardPage.goToHeroesPage();
    const heroesPageURL = await heroesPage.verifyURL();
    await expect(heroesPageURL).toContain(testData.heroesPageData.verifyInURL);
  });

  test('test bombasto page contents', async () => {
    await dashboardPage.goToBombastoPage();
    const bombastoPageURL = await bombastoPage.verifyURL();
    await expect(bombastoPageURL).toContain(
      testData.bombastoPageData.verifyInURL
    );
  });

  test('test celeritos page contents', async () => {
    await dashboardPage.goToCeleritasPage();
    const celeriatsPageURL = await celeritasPage.verifyURL();
    await expect(celeriatsPageURL).toContain(
      testData.celeritasPageData.verifyInURL
    );
  });

  test('test magneta page contents', async () => {
    await dashboardPage.goToMagnetaPage();
    const magnetaPageURL = await magnetaPage.verifyURL();
    await expect(magnetaPageURL).toContain(
      testData.magnetaPageData.verifyInURL
    );
  });

  test('test rubber man page contents', async () => {
    await dashboardPage.goToRubbermanPage();
    const rubbermanPageURL = await rubbermanPage.verifyURL();
    await expect(rubbermanPageURL).toContain(
      testData.rubbermanPageData.verifyInURL
    );
  });

  test.afterEach(async ({ page }) => {
    await dashboardPage.returnToDashboardPage();
    await page.close();
  });
});
