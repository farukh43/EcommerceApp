import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountPage extends BasePage {
  readonly pageTitle: Locator;
  readonly editAccountLink: Locator;
  readonly changePasswordLink: Locator;
  readonly modifyAddressBookLink: Locator;
  readonly modifyWishlistLink: Locator;
  readonly orderHistoryLink: Locator;
  readonly downloadsLink: Locator;
  readonly rewardPointsLink: Locator;
  readonly returnsLink: Locator;
  readonly transactionsLink: Locator;
  readonly recurringPaymentsLink: Locator;
  readonly newsletterLink: Locator;
  readonly logoutLink: Locator;
  readonly myAccountDropdown: Locator;

  constructor(page: Page) {
    super(page);

    this.pageTitle = page.locator('#content h2').first();
    this.editAccountLink = page.locator('a:has-text("Edit your account information")');
    this.changePasswordLink = page.locator('a:has-text("Change your password")');
    this.modifyAddressBookLink = page.locator('a:has-text("Modify your address book entries")');
    this.modifyWishlistLink = page.locator('a:has-text("Modify your wish list")');
    this.orderHistoryLink = page.locator('a:has-text("View your order history")');
    this.downloadsLink = page.locator('a:has-text("Downloads")');
    this.rewardPointsLink = page.locator('a:has-text("Your Reward Points")');
    this.returnsLink = page.locator('a:has-text("View your return requests")');
    this.transactionsLink = page.locator('a:has-text("Your Transactions")');
    this.recurringPaymentsLink = page.locator('a:has-text("Recurring payments")');
    this.newsletterLink = page.locator('a:has-text("Subscribe / unsubscribe to newsletter")');
    this.logoutLink = page.locator('#column-right a:has-text("Logout")');
    this.myAccountDropdown = page.locator('.dropdown a[title="My Account"]');
  }

  async goToAccountPage() {
    await this.navigate('index.php?route=account/account');
    await this.waitForPageLoad();
  }

  async editAccount() {
    await this.editAccountLink.click();
  }

  async changePassword() {
    await this.changePasswordLink.click();
  }

  async viewOrderHistory() {
    await this.orderHistoryLink.click();
  }

  async modifyWishlist() {
    await this.modifyWishlistLink.click();
  }

  async modifyAddressBook() {
    await this.modifyAddressBookLink.click();
  }

  async logout() {
    await this.logoutLink.click();
  }

  async logoutFromHeader() {
    await this.myAccountDropdown.click();
    await this.page.locator('ul.dropdown-menu a:has-text("Logout")').click();
  }
}
