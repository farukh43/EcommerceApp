import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
  readonly productName: Locator;
  readonly productPrice: Locator;
  readonly productDescription: Locator;
  readonly productImage: Locator;
  readonly quantityInput: Locator;
  readonly addToCartButton: Locator;
  readonly addToWishlistButton: Locator;
  readonly compareButton: Locator;
  readonly successMessage: Locator;
  readonly reviewsTab: Locator;
  readonly descriptionTab: Locator;
  readonly reviewerNameInput: Locator;
  readonly reviewTextarea: Locator;
  readonly ratingRadios: Locator;
  readonly submitReviewButton: Locator;
  readonly breadcrumb: Locator;
  readonly availability: Locator;

  constructor(page: Page) {
    super(page);

    this.productName = page.locator('#content h1');
    this.productPrice = page.locator('.price-new, #content h2');
    this.productDescription = page.locator('#tab-description');
    this.productImage = page.locator('.thumbnails img').first();
    this.quantityInput = page.locator('#input-quantity');
    this.addToCartButton = page.locator('#button-cart');
    this.addToWishlistButton = page.locator('button[onclick*="wishlist.add"]');
    this.compareButton = page.locator('button[onclick*="compare.add"]');
    this.successMessage = page.locator('.alert-success');
    this.reviewsTab = page.locator('a[href="#tab-review"]');
    this.descriptionTab = page.locator('a[href="#tab-description"]');
    this.reviewerNameInput = page.locator('#input-name');
    this.reviewTextarea = page.locator('#input-review');
    this.ratingRadios = page.locator('input[name="rating"]');
    this.submitReviewButton = page.locator('#button-review');
    this.breadcrumb = page.locator('.breadcrumb');
    this.availability = page.locator('li:has-text("Availability")');
  }

  async getProductName(): Promise<string> {
    return await this.productName.innerText();
  }

  async getProductPrice(): Promise<string> {
    return await this.productPrice.first().innerText();
  }

  async setQuantity(quantity: number) {
    await this.quantityInput.fill(quantity.toString());
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async addToWishlist() {
    await this.addToWishlistButton.click();
  }

  async addToCompare() {
    await this.compareButton.click();
  }

  async isSuccessMessageDisplayed(): Promise<boolean> {
    return await this.successMessage.isVisible();
  }

  async getSuccessMessage(): Promise<string> {
    return await this.successMessage.innerText();
  }

  async writeReview(name: string, review: string, rating: number) {
    await this.reviewsTab.click();
    await this.reviewerNameInput.fill(name);
    await this.reviewTextarea.fill(review);
    await this.ratingRadios.nth(rating - 1).check();
    await this.submitReviewButton.click();
  }

  async goToDescriptionTab() {
    await this.descriptionTab.click();
  }

  async goToReviewsTab() {
    await this.reviewsTab.click();
  }
}
