import { test, expect } from '../../../fixtures/fixtures';
import { testData } from '../../../data/testData';

test.describe('Login Functionality', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goToHomePage();
  });

  test('should display login page correctly', async ({ homePage, loginPage }) => {
    await homePage.goToLogin();

    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
    await expect(loginPage.forgotPasswordLink).toBeVisible();
  });

  test('should show error for invalid credentials', async ({ homePage, loginPage }) => {
    await homePage.goToLogin();
    await loginPage.login(testData.invalidUser.email, testData.invalidUser.password);

    await expect(loginPage.alertDanger).toBeVisible();
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Warning: No match for E-Mail Address and/or Password');
  });

  test('should show error for empty email', async ({ homePage, loginPage }) => {
    await homePage.goToLogin();
    await loginPage.login('', testData.invalidUser.password);
    await expect(loginPage.alertDanger).toBeVisible();
  });

  test('should show error for empty password', async ({ homePage, loginPage }) => {
    await homePage.goToLogin();
    await loginPage.login(testData.invalidUser.email, '');
    await expect(loginPage.alertDanger).toBeVisible();
  });

  test('should show error for empty email and password', async ({ homePage, loginPage }) => {
    await homePage.goToLogin();
    await loginPage.login('', '');
    await expect(loginPage.alertDanger).toBeVisible();
  });

  test('should navigate to forgot password page', async ({ homePage, loginPage, page }) => {
    await homePage.goToLogin();
    await loginPage.clickForgotPassword();
    await expect(page).toHaveURL(/route=account\/forgotten/);
  });

  test('should navigate to register page from login', async ({ homePage, loginPage, page }) => {
    await homePage.goToLogin();
    await loginPage.clickContinueToRegister();
    await expect(page).toHaveURL(/route=account\/register/);
  });

  test('should login with valid credentials', async ({ homePage, loginPage, page }) => {
    await homePage.goToLogin();
    await loginPage.login(testData.validUser.email, testData.validUser.password);
    await expect(page).toHaveURL(/route=account\/account/);
  });
});
