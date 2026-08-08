import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async handleRedirectPage() {
    // Check if redirect page is displayed and click through
    const redirectLink = this.page.locator('a[href*="tutorialsninja.com/demo"]');
    const redirectText = this.page.locator('text=For more details visit');

    try {
      // Wait briefly to see if redirect page appears
      const isRedirectPage = await redirectText.isVisible({ timeout: 3000 });

      if (isRedirectPage) {
        console.log('Redirect page detected, clicking through...');
        await redirectLink.click();
        await this.page.waitForLoadState('domcontentloaded');
        // Wait a bit for the actual page to load
        await this.page.waitForTimeout(2000);
      }
    } catch {
      // Redirect page not present, continue normally
    }
  }

  async navigate(path: string = '') {
    await this.page.goto(path);
    await this.handleRedirectPage();
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async clickElement(locator: Locator) {
    await locator.click();
  }

  async fillInput(locator: Locator, text: string) {
    await locator.fill(text);
  }

  async getText(locator: Locator): Promise<string> {
    return await locator.innerText();
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
  }

  async waitForElement(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
  }
}
