# Skill: Create Test Suite

Create a new test suite following the project's testing pattern.

## Usage
```
/create-test <type> <name>
```
- type: ui, api, or e2e
- name: test suite name (e.g., search, cart, checkout)

## Instructions
1. Reference `graphify-out/GRAPH_REPORT.md` for existing structure
2. Create test file in `src/tests/<type>/<name>/<name>.spec.ts`
3. Import fixtures and test data
4. Add Allure decorators for reporting
5. Follow existing test patterns
6. Run `/graphify . --update`

## Template
```typescript
import { test, expect } from '../../../fixtures/fixtures';
import { testData } from '../../../data/testData';
import * as allure from 'allure-playwright';

test.describe('<Name> Functionality', () => {
  test.beforeEach(async ({ homePage }) => {
    await allure.epic('<Epic>');
    await allure.feature('<Feature>');
    await homePage.goToHomePage();
  });

  test('should <action>', async ({ page, <pageName>Page }) => {
    await allure.story('<Story>');
    await allure.severity('critical');

    await allure.step('Step 1', async () => {
      // implementation
    });

    await allure.step('Verify result', async () => {
      await expect(page).toHaveURL(/expected-url/);
    });
  });
});
```
