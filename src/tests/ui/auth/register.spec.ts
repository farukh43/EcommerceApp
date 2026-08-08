import { test, expect } from '../../../fixtures/fixtures';
import { generateUserData } from '../../../data/testData';

test.describe('User Registration', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goToHomePage();
  });

  test('should display registration page correctly', async ({ homePage, registerPage }) => {
    await homePage.goToRegister();

    await expect(registerPage.firstNameInput).toBeVisible();
    await expect(registerPage.lastNameInput).toBeVisible();
    await expect(registerPage.emailInput).toBeVisible();
    await expect(registerPage.telephoneInput).toBeVisible();
    await expect(registerPage.passwordInput).toBeVisible();
    await expect(registerPage.confirmPasswordInput).toBeVisible();
    await expect(registerPage.privacyPolicyCheckbox).toBeVisible();
    await expect(registerPage.continueButton).toBeVisible();
  });

  test('should register a new user successfully', async ({ homePage, registerPage, page }) => {
    const userData = generateUserData();

    await homePage.goToRegister();
    await registerPage.register(userData);

    // Wait for navigation after registration
    await page.waitForURL(/route=account\/success/, { timeout: 30000 });
    await expect(page.locator('#content h1')).toContainText('Your Account Has Been Created!');
  });

  test('should show error when registering with existing email', async ({ homePage, registerPage, page }) => {
    // Use the known existing email
    const userData = {
      firstName: 'Test',
      lastName: 'User',
      email: 'farukh43@gmail.com', // Existing email
      telephone: '1234567890',
      password: 'Test@123',
    };

    await homePage.goToRegister();
    await registerPage.register(userData);

    await expect(registerPage.alertDanger).toBeVisible({ timeout: 10000 });
    const errorMessage = await registerPage.getErrorMessage();
    expect(errorMessage).toContain('E-Mail Address is already registered');
  });

  test('should show error for missing first name', async ({ homePage, registerPage, page }) => {
    const userData = generateUserData();
    userData.firstName = '';

    await homePage.goToRegister();
    await registerPage.register(userData);

    const firstNameError = page.locator('text=First Name must be between 1 and 32 characters!');
    await expect(firstNameError).toBeVisible();
  });

  test('should show error for missing last name', async ({ homePage, registerPage, page }) => {
    const userData = generateUserData();
    userData.lastName = '';

    await homePage.goToRegister();
    await registerPage.register(userData);

    const lastNameError = page.locator('text=Last Name must be between 1 and 32 characters!');
    await expect(lastNameError).toBeVisible();
  });

  test('should show browser validation for invalid email format', async ({ homePage, registerPage, page }) => {
    const userData = generateUserData();
    userData.email = 'invalidemail'; // No @ symbol

    await homePage.goToRegister();

    // Fill form with invalid email
    await registerPage.firstNameInput.fill(userData.firstName);
    await registerPage.lastNameInput.fill(userData.lastName);
    await registerPage.emailInput.fill(userData.email);
    await registerPage.telephoneInput.fill(userData.telephone);
    await registerPage.passwordInput.fill(userData.password);
    await registerPage.confirmPasswordInput.fill(userData.password);
    await registerPage.privacyPolicyCheckbox.check();
    await registerPage.continueButton.click();

    // Browser validation should prevent form submission
    // Check that we're still on register page (form wasn't submitted)
    await expect(page).toHaveURL(/route=account\/register/);
  });

  test('should show error for short password', async ({ homePage, registerPage, page }) => {
    const userData = generateUserData();
    userData.password = '123';

    await homePage.goToRegister();
    await registerPage.register(userData);

    const passwordError = page.locator('text=Password must be between 4 and 20 characters!');
    await expect(passwordError).toBeVisible();
  });

  test('should show error when passwords do not match', async ({ homePage, registerPage, page }) => {
    const userData = generateUserData();

    await homePage.goToRegister();

    await registerPage.firstNameInput.fill(userData.firstName);
    await registerPage.lastNameInput.fill(userData.lastName);
    await registerPage.emailInput.fill(userData.email);
    await registerPage.telephoneInput.fill(userData.telephone);
    await registerPage.passwordInput.fill(userData.password);
    await registerPage.confirmPasswordInput.fill('differentpassword');
    await registerPage.privacyPolicyCheckbox.check();
    await registerPage.continueButton.click();

    const confirmError = page.locator('text=Password confirmation does not match password!');
    await expect(confirmError).toBeVisible();
  });

  test('should show error when privacy policy is not accepted', async ({ homePage, registerPage }) => {
    const userData = generateUserData();

    await homePage.goToRegister();

    await registerPage.firstNameInput.fill(userData.firstName);
    await registerPage.lastNameInput.fill(userData.lastName);
    await registerPage.emailInput.fill(userData.email);
    await registerPage.telephoneInput.fill(userData.telephone);
    await registerPage.passwordInput.fill(userData.password);
    await registerPage.confirmPasswordInput.fill(userData.password);
    await registerPage.continueButton.click();

    await expect(registerPage.alertDanger).toBeVisible();
    const errorMessage = await registerPage.getErrorMessage();
    expect(errorMessage).toContain('Warning: You must agree to the Privacy Policy!');
  });

  test('should show error for missing telephone', async ({ homePage, registerPage, page }) => {
    const userData = generateUserData();
    userData.telephone = '';

    await homePage.goToRegister();
    await registerPage.register(userData);

    const telephoneError = page.locator('text=Telephone must be between 3 and 32 characters!');
    await expect(telephoneError).toBeVisible();
  });

  test('should allow user to subscribe to newsletter', async ({ homePage, registerPage, page }) => {
    const userData = generateUserData();

    await homePage.goToRegister();
    await registerPage.register({ ...userData, subscribe: true });

    await page.waitForURL(/route=account\/success/, { timeout: 30000 });
  });
});
