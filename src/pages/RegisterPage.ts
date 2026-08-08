import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly subscribeYes: Locator;
  readonly subscribeNo: Locator;
  readonly privacyPolicyCheckbox: Locator;
  readonly continueButton: Locator;
  readonly alertDanger: Locator;
  readonly alertSuccess: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    super(page);

    this.firstNameInput = page.locator('#input-firstname');
    this.lastNameInput = page.locator('#input-lastname');
    this.emailInput = page.locator('#input-email');
    this.telephoneInput = page.locator('#input-telephone');
    this.passwordInput = page.locator('#input-password');
    this.confirmPasswordInput = page.locator('#input-confirm');
    this.subscribeYes = page.locator('input[name="newsletter"][value="1"]');
    this.subscribeNo = page.locator('input[name="newsletter"][value="0"]');
    this.privacyPolicyCheckbox = page.locator('input[name="agree"]');
    this.continueButton = page.locator('input[value="Continue"]');
    this.alertDanger = page.locator('.alert-danger');
    this.alertSuccess = page.locator('.alert-success');
    this.pageTitle = page.locator('#content h1');
  }

  async goToRegisterPage() {
    await this.navigate('index.php?route=account/register');
    await this.waitForPageLoad();
  }

  async register(userData: {
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    password: string;
    subscribe?: boolean;
  }) {
    await this.firstNameInput.fill(userData.firstName);
    await this.lastNameInput.fill(userData.lastName);
    await this.emailInput.fill(userData.email);
    await this.telephoneInput.fill(userData.telephone);
    await this.passwordInput.fill(userData.password);
    await this.confirmPasswordInput.fill(userData.password);

    if (userData.subscribe) {
      await this.subscribeYes.check();
    } else {
      await this.subscribeNo.check();
    }

    await this.privacyPolicyCheckbox.check();
    await this.continueButton.click();
  }

  async getErrorMessage(): Promise<string> {
    return await this.alertDanger.innerText();
  }

  async isErrorDisplayed(): Promise<boolean> {
    return await this.alertDanger.isVisible();
  }

  async getPageTitle(): Promise<string> {
    return await this.pageTitle.innerText();
  }
}
