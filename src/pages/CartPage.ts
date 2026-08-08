import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly cartItems: Locator;
  readonly productNames: Locator;
  readonly productPrices: Locator;
  readonly quantityInputs: Locator;
  readonly updateButtons: Locator;
  readonly removeButtons: Locator;
  readonly subTotal: Locator;
  readonly total: Locator;
  readonly continueShoppingButton: Locator;
  readonly checkoutButton: Locator;
  readonly emptyCartMessage: Locator;
  readonly couponInput: Locator;
  readonly applyCouponButton: Locator;
  readonly estimateShippingCountry: Locator;
  readonly estimateShippingRegion: Locator;
  readonly estimateShippingPostcode: Locator;
  readonly getQuotesButton: Locator;

  constructor(page: Page) {
    super(page);

    this.cartItems = page.locator('#content form table tbody tr');
    this.productNames = page.locator('#content form table tbody tr td:nth-child(2) a');
    this.productPrices = page.locator('#content form table tbody tr td:nth-child(5)');
    this.quantityInputs = page.locator('input[name*="quantity"]');
    this.updateButtons = page.locator('button[data-original-title="Update"]');
    this.removeButtons = page.locator('button[data-original-title="Remove"]');
    this.subTotal = page.locator('table.table-bordered tr:has-text("Sub-Total") td:last-child');
    this.total = page.locator('table.table-bordered tr:has-text("Total") td:last-child');
    this.continueShoppingButton = page.locator('a:has-text("Continue Shopping")');
    this.checkoutButton = page.locator('a:has-text("Checkout")');
    this.emptyCartMessage = page.locator('p:has-text("Your shopping cart is empty!")');
    this.couponInput = page.locator('#input-coupon');
    this.applyCouponButton = page.locator('#button-coupon');
    this.estimateShippingCountry = page.locator('#input-country');
    this.estimateShippingRegion = page.locator('#input-zone');
    this.estimateShippingPostcode = page.locator('#input-postcode');
    this.getQuotesButton = page.locator('#button-quote');
  }

  async goToCartPage() {
    await this.navigate('index.php?route=checkout/cart');
    await this.waitForPageLoad();
  }

  async getCartItemCount(): Promise<number> {
    return await this.cartItems.count();
  }

  async getProductNames(): Promise<string[]> {
    return await this.productNames.allInnerTexts();
  }

  async updateQuantity(index: number, quantity: number) {
    await this.quantityInputs.nth(index).fill(quantity.toString());
    await this.updateButtons.nth(index).click();
  }

  async removeItem(index: number) {
    await this.removeButtons.nth(index).click();
  }

  async getSubTotal(): Promise<string> {
    return await this.subTotal.innerText();
  }

  async getTotal(): Promise<string> {
    return await this.total.innerText();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async isCartEmpty(): Promise<boolean> {
    return await this.emptyCartMessage.isVisible();
  }

  async applyCoupon(code: string) {
    await this.couponInput.fill(code);
    await this.applyCouponButton.click();
  }

  async estimateShipping(country: string, region: string, postcode: string) {
    await this.estimateShippingCountry.selectOption({ label: country });
    await this.estimateShippingRegion.selectOption({ label: region });
    await this.estimateShippingPostcode.fill(postcode);
    await this.getQuotesButton.click();
  }
}
