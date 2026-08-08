# Skill: Create Page Object

Create a new Page Object class following the project's POM pattern.

## Usage
```
/create-page <PageName>
```

## Instructions
1. Read `src/pages/BasePage.ts` for base class structure
2. Create new file `src/pages/<PageName>Page.ts`
3. Extend `BasePage` class
4. Define locators as `readonly` properties using `page.locator()`
5. Add methods for page interactions
6. Export from `src/pages/index.ts`
7. Add to `src/fixtures/fixtures.ts`
8. Run `/graphify . --update`

## Template
```typescript
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class <PageName>Page extends BasePage {
  // Locators
  readonly elementName: Locator;

  constructor(page: Page) {
    super(page);
    this.elementName = page.locator('selector');
  }

  // Methods
  async actionName() {
    // implementation
  }
}
```
