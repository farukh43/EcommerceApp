import { test as base, TestInfo } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { SearchPage } from '../pages/SearchPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { AccountPage } from '../pages/AccountPage';

type Pages = {
  homePage: HomePage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
  searchPage: SearchPage;
  productPage: ProductPage;
  cartPage: CartPage;
  accountPage: AccountPage;
};

// Helper function to handle redirect page
async function handleRedirectIfPresent(page: any) {
  const redirectText = page.locator('text=For more details visit');
  const redirectLink = page.locator('a[href*="tutorialsninja.com/demo"]');

  try {
    const isRedirectPage = await redirectText.isVisible({ timeout: 2000 });
    if (isRedirectPage) {
      console.log('Redirect page detected in fixture, clicking through...');
      await redirectLink.click();
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(1000);
    }
  } catch {
    // No redirect page, continue
  }
}

export const test = base.extend<Pages>({
  page: async ({ page }, use) => {
    // Handle redirect on initial page load
    page.on('load', async () => {
      await handleRedirectIfPresent(page);
    });
    await use(page);
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  searchPage: async ({ page }, use) => {
    await use(new SearchPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  accountPage: async ({ page }, use) => {
    await use(new AccountPage(page));
  },
});

export { expect } from '@playwright/test';
