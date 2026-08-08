import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchPage extends BasePage {
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly searchInDescriptionCheckbox: Locator;
  readonly categoryDropdown: Locator;
  readonly subCategoryCheckbox: Locator;
  readonly productList: Locator;
  readonly productNames: Locator;
  readonly productPrices: Locator;
  readonly addToCartButtons: Locator;
  readonly noResultsMessage: Locator;
  readonly sortDropdown: Locator;
  readonly showDropdown: Locator;
  readonly listViewButton: Locator;
  readonly gridViewButton: Locator;

  constructor(page: Page) {
    super(page);

    this.searchInput = page.locator('#input-search');
    this.searchButton = page.locator('#button-search');
    this.searchInDescriptionCheckbox = page.locator('#description');
    this.categoryDropdown = page.locator('select[name="category_id"]');
    this.subCategoryCheckbox = page.locator('input[name="sub_category"]');
    this.productList = page.locator('.product-layout');
    this.productNames = page.locator('.product-layout .caption h4 a');
    this.productPrices = page.locator('.product-layout .price');
    this.addToCartButtons = page.locator('.product-layout button[onclick*="cart.add"]');
    this.noResultsMessage = page.locator('p:has-text("There is no product that matches the search criteria")');
    this.sortDropdown = page.locator('#input-sort');
    this.showDropdown = page.locator('#input-limit');
    this.listViewButton = page.locator('#list-view');
    this.gridViewButton = page.locator('#grid-view');
  }

  async searchProduct(keyword: string) {
    await this.searchInput.fill(keyword);
    await this.searchButton.click();
  }

  async getProductCount(): Promise<number> {
    return await this.productList.count();
  }

  async getProductNames(): Promise<string[]> {
    return await this.productNames.allInnerTexts();
  }

  async clickProduct(index: number) {
    await this.productNames.nth(index).click();
  }

  async clickProductByName(name: string) {
    await this.page.locator(`.product-layout .caption h4 a:has-text("${name}")`).click();
  }

  async addProductToCart(index: number) {
    await this.addToCartButtons.nth(index).click();
  }

  async isNoResultsDisplayed(): Promise<boolean> {
    return await this.noResultsMessage.isVisible();
  }

  async sortBy(option: string) {
    await this.sortDropdown.selectOption({ label: option });
  }

  async setShowLimit(limit: string) {
    await this.showDropdown.selectOption({ label: limit });
  }

  async switchToListView() {
    await this.listViewButton.click();
  }

  async switchToGridView() {
    await this.gridViewButton.click();
  }
}
