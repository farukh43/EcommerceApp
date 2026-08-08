import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly continueButton: Locator;
  readonly alertDanger: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    super(page);

    this.emailInput = page.locator('#input-email');
    this.passwordInput = page.locator('#input-password');
    this.loginButton = page.locator('input[value="Login"]');
    this.forgotPasswordLink = page.locator('#content a:has-text("Forgotten Password")');
    this.continueButton = page.locator('a.btn-primary:has-text("Continue")');
    this.alertDanger = page.locator('.alert-danger');
    this.pageTitle = page.locator('#content h2').first();
  }

  async goToLoginPage() {
    await this.navigate('index.php?route=account/login');
    await this.waitForPageLoad();
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage(): Promise<string> {
    return await this.alertDanger.innerText();
  }

  async isErrorDisplayed(): Promise<boolean> {
    return await this.alertDanger.isVisible();
  }

  async clickForgotPassword() {
    await this.forgotPasswordLink.click();
  }

  async clickContinueToRegister() {
    await this.continueButton.click();
  }
}
