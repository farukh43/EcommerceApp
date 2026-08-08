import { test, expect } from '../../../fixtures/fixtures';
import { generateUserData } from '../../../data/testData';

test.describe('Logout Functionality', () => {
  test('should logout successfully after login', async ({ homePage, registerPage, page }) => {
    const userData = generateUserData();

    await homePage.goToHomePage();
    await homePage.goToRegister();
    await registerPage.register(userData);

    // Use specific locator for dropdown logout link
    await page.locator('.dropdown a[title="My Account"]').click();
    await page.locator('#top-links a:has-text("Logout")').click();

    await expect(page).toHaveURL(/route=account\/logout/);
    await expect(page.locator('#content h1')).toContainText('Account Logout');
    await expect(page.locator('#content p').first()).toContainText('You have been logged off your account');
  });

  test('should redirect to login page after logout and trying to access account', async ({
    homePage,
    registerPage,
    page,
  }) => {
    const userData = generateUserData();

    await homePage.goToHomePage();
    await homePage.goToRegister();
    await registerPage.register(userData);

    // Use specific locator for dropdown logout link
    await page.locator('.dropdown a[title="My Account"]').click();
    await page.locator('#top-links a:has-text("Logout")').click();

    await page.goto('index.php?route=account/account');

    await expect(page).toHaveURL(/route=account\/login/);
  });

  test('should show login option after logout', async ({ homePage, registerPage, page }) => {
    const userData = generateUserData();

    await homePage.goToHomePage();
    await homePage.goToRegister();
    await registerPage.register(userData);

    // Use specific locator for dropdown logout link
    await page.locator('.dropdown a[title="My Account"]').click();
    await page.locator('#top-links a:has-text("Logout")').click();

    await page.locator('a.btn-primary:has-text("Continue")').click();

    await page.locator('.dropdown a[title="My Account"]').click();
    await expect(page.locator('#top-links a:has-text("Login")')).toBeVisible();
    await expect(page.locator('#top-links a:has-text("Register")')).toBeVisible();
  });
});
