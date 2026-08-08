# Skill: Create E2E Test

Create end-to-end user journey tests.

## Usage
```
/create-e2e-test <journey-name>
```

## Instructions
1. Create test file in `src/tests/e2e/<journey>.spec.ts`
2. Chain multiple page objects for complete flow
3. Use realistic test data
4. Add comprehensive Allure steps

## Template
```typescript
import { test, expect } from '../../fixtures/fixtures';
import { testData, generateUserData } from '../../data/testData';
import * as allure from 'allure-playwright';

test.describe('E2E: <Journey Name>', () => {
  test('complete <journey> flow', async ({
    page,
    homePage,
    loginPage,
    searchPage,
    productPage,
    cartPage
  }) => {
    await allure.epic('E2E');
    await allure.feature('<Journey>');
    await allure.story('Complete Flow');
    await allure.severity('blocker');

    await test.step('Step 1: Login', async () => {
      await homePage.goToHomePage();
      await homePage.goToLogin();
      await loginPage.login(testData.validUser.email, testData.validUser.password);
      await expect(page).toHaveURL(/route=account\/account/);
    });

    await test.step('Step 2: Search Product', async () => {
      await homePage.searchProduct(testData.products.macbook);
      await expect(searchPage.productList.first()).toBeVisible();
    });

    await test.step('Step 3: Add to Cart', async () => {
      await searchPage.clickProductByName('MacBook');
      await productPage.addToCart();
      await expect(productPage.successMessage).toBeVisible();
    });

    await test.step('Step 4: View Cart', async () => {
      await cartPage.goToCartPage();
      const itemCount = await cartPage.getCartItemCount();
      expect(itemCount).toBeGreaterThan(0);
    });

    await test.step('Step 5: Proceed to Checkout', async () => {
      await cartPage.proceedToCheckout();
      await expect(page).toHaveURL(/route=checkout\/checkout/);
    });
  });
});
```

## Common E2E Flows
- User Registration → Login → Browse → Purchase
- Guest Checkout Flow
- Wishlist Management
- Account Settings Update
- Product Review Submission
