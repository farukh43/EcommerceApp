import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  // Header elements
  readonly logo: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly cartButton: Locator;
  readonly myAccountDropdown: Locator;
  readonly loginLink: Locator;
  readonly registerLink: Locator;

  // Navigation
  readonly desktopsMenu: Locator;
  readonly laptopsMenu: Locator;
  readonly componentsMenu: Locator;
  readonly tabletsMenu: Locator;
  readonly softwareMenu: Locator;
  readonly phonesMenu: Locator;
  readonly camerasMenu: Locator;
  readonly mp3PlayersMenu: Locator;

  // Featured products
  readonly featuredProducts: Locator;
  readonly addToCartButtons: Locator;

  constructor(page: Page) {
    super(page);

    // Header
    this.logo = page.locator('#logo');
    this.searchInput = page.locator('input[name="search"]');
    this.searchButton = page.locator('.btn-default.btn-lg');
    this.cartButton = page.locator('#cart');
    this.myAccountDropdown = page.locator('.dropdown a[title="My Account"]');
    this.loginLink = page.locator('a:has-text("Login")').first();
    this.registerLink = page.locator('a:has-text("Register")').first();

    // Navigation menu
    this.desktopsMenu = page.locator('.nav a:has-text("Desktops")');
    this.laptopsMenu = page.locator('.nav a:has-text("Laptops & Notebooks")');
    this.componentsMenu = page.locator('.nav a:has-text("Components")');
    this.tabletsMenu = page.locator('.nav a:has-text("Tablets")');
    this.softwareMenu = page.locator('.nav a:has-text("Software")');
    this.phonesMenu = page.locator('.nav a:has-text("Phones & PDAs")');
    this.camerasMenu = page.locator('.nav a:has-text("Cameras")');
    this.mp3PlayersMenu = page.locator('.nav a:has-text("MP3 Players")');

    // Products
    this.featuredProducts = page.locator('.product-layout');
    this.addToCartButtons = page.locator('button[onclick*="cart.add"]');
  }

  async goToHomePage() {
    await this.navigate('?route=common/home');
    await this.handleRedirectPage();
    // Wait for logo to confirm actual page loaded
    await this.logo.waitFor({ state: 'visible', timeout: 30000 });
  }

  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async openMyAccountDropdown() {
    await this.myAccountDropdown.click();
  }

  async goToLogin() {
    await this.openMyAccountDropdown();
    await this.loginLink.click();
  }

  async goToRegister() {
    await this.openMyAccountDropdown();
    await this.registerLink.click();
  }

  async getFeaturedProductsCount(): Promise<number> {
    return await this.featuredProducts.count();
  }

  async addFeaturedProductToCart(index: number) {
    await this.addToCartButtons.nth(index).click();
  }
}
