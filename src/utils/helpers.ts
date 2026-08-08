import { Page } from '@playwright/test';

export async function waitForNetworkIdle(page: Page) {
  await page.waitForLoadState('networkidle');
}

export async function takeScreenshot(page: Page, name: string) {
  await page.screenshot({ path: `reports/screenshots/${name}.png`, fullPage: true });
}

export function formatPrice(price: string): number {
  return parseFloat(price.replace(/[^0-9.]/g, ''));
}

export function generateRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function getCurrentTimestamp(): string {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

export async function scrollToElement(page: Page, selector: string) {
  await page.locator(selector).scrollIntoViewIfNeeded();
}

export async function waitForElementToDisappear(page: Page, selector: string, timeout: number = 5000) {
  await page.locator(selector).waitFor({ state: 'hidden', timeout });
}

export async function acceptAlert(page: Page) {
  page.on('dialog', dialog => dialog.accept());
}

export async function dismissAlert(page: Page) {
  page.on('dialog', dialog => dialog.dismiss());
}
