# Project: eCommerce Playwright Test Automation

## Overview
End-to-end test automation framework for TutorialsNinja e-commerce website using Playwright with TypeScript.

## Quick Reference (Use Graphify First!)
Before reading files, check `graphify-out/GRAPH_REPORT.md` for project structure.
Run `/graphify . --update` after major changes.

## Tech Stack
- **Framework:** Playwright
- **Language:** TypeScript
- **Pattern:** Page Object Model (POM)
- **Reporting:** Playwright HTML + Allure
- **Graph:** Graphify for codebase visualization

## Project Structure
```
src/
├── pages/          # Page Object classes (inherit BasePage)
├── tests/
│   ├── ui/         # UI functional tests
│   ├── api/        # API tests
│   └── e2e/        # End-to-end flow tests
├── fixtures/       # Playwright fixtures
├── data/           # Test data
├── config/         # Configuration files
└── utils/          # Helper utilities
```

## Key Files
- `playwright.config.ts` - Playwright configuration
- `src/fixtures/fixtures.ts` - Page object fixtures
- `src/data/testData.ts` - Test credentials and data
- `src/pages/BasePage.ts` - Base class for all pages

## God Nodes (Core Abstractions)
1. BasePage - Parent class for all page objects
2. fixtures.ts - Provides page instances to tests
3. testData.ts - Central test data store

## Commands
```bash
npm test                    # Run all tests
npm run test:ui             # Run UI tests only
npm run test:api            # Run API tests only
npm run test:e2e            # Run E2E tests only
npm run test:headed         # Run with browser visible
npm run report              # View Playwright report
npm run allure:report       # View Allure report
```

## Conventions
1. **Page Objects:** Extend `BasePage`, use Locator type
2. **Tests:** Use fixtures from `fixtures.ts`, add Allure decorators
3. **Naming:** `*.spec.ts` for tests, `*Page.ts` for pages
4. **Imports:** Use relative paths from test location

## Test Credentials
- Email: `farukh43@gmail.com`
- Password: `farukh43@gmail.com`
- Stored in: `.env` and `src/data/testData.ts`

## Allure Decorators
```typescript
await allure.epic('Feature Area');
await allure.feature('Feature Name');
await allure.story('User Story');
await allure.severity('critical');
await allure.step('Step description', async () => { });
```

## Adding New Tests
1. Check if page object exists in `src/pages/`
2. If not, create extending `BasePage`
3. Add to `src/fixtures/fixtures.ts`
4. Create test in appropriate folder under `src/tests/`
5. Use Allure decorators for reporting
6. Run `/graphify . --update` to update graph
