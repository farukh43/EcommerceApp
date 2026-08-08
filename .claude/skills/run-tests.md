# Skill: Run Tests

Execute Playwright tests with various options.

## Usage
```
/run-tests [options]
```

## Options
- `all` - Run all tests
- `ui` - Run UI tests only
- `api` - Run API tests only
- `e2e` - Run E2E tests only
- `auth` - Run authentication tests
- `headed` - Run with browser visible
- `debug` - Run in debug mode
- `<file>` - Run specific test file

## Commands Reference
```bash
# All tests
npm test

# By type
npm run test:ui
npm run test:api
npm run test:e2e

# Specific folder
npm run test:ui:auth
npm run test:ui:products
npm run test:ui:cart

# With options
npm run test:headed
npm run test:debug

# Specific file
npx playwright test src/tests/ui/auth/login.spec.ts

# Specific browser
npm run test:chrome
npm run test:firefox

# Generate reports after
npm run report           # Playwright HTML
npm run allure:report    # Allure report
```

## After Running
- Check `reports/html-report/` for Playwright report
- Run `npm run allure:report` for Allure report
- Screenshots/videos saved on failure
