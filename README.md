# eCommerce Playwright Test Automation

End-to-end test automation framework for [TutorialsNinja](https://tutorialsninja.com/demo/) e-commerce website using Playwright with TypeScript.

## Tech Stack

- **Framework:** Playwright
- **Language:** TypeScript
- **Pattern:** Page Object Model (POM)
- **Reporting:** Playwright HTML + Allure
- **Visualization:** Graphify

## Project Structure

```
eCommerceApp/
├── src/
│   ├── pages/              # Page Object classes
│   │   ├── BasePage.ts     # Base class for all pages
│   │   ├── HomePage.ts
│   │   ├── LoginPage.ts
│   │   ├── RegisterPage.ts
│   │   ├── ProductPage.ts
│   │   ├── SearchPage.ts
│   │   ├── CartPage.ts
│   │   └── AccountPage.ts
│   ├── tests/
│   │   ├── ui/             # UI functional tests
│   │   │   └── auth/       # Authentication tests
│   │   ├── api/            # API tests
│   │   └── e2e/            # End-to-end flow tests
│   ├── fixtures/           # Playwright fixtures
│   ├── data/               # Test data
│   ├── config/             # Configuration files
│   └── utils/              # Helper utilities
├── reports/                # Test reports
├── allure-results/         # Allure raw results
├── allure-report/          # Allure HTML report
├── graphify-out/           # Codebase visualization
└── .claude/                # Claude Code skills
```

## Prerequisites

- Node.js v18+
- npm or yarn

## Installation

```bash
# Clone the repository
git clone https://github.com/farukh43/EcommerceApp.git
cd EcommerceApp

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## Configuration

1. Copy environment file:
```bash
cp .env.example .env
```

2. Update `.env` with your credentials:
```
TEST_USER_EMAIL=your_email@example.com
TEST_USER_PASSWORD=your_password
```

## Running Tests

```bash
# Run all tests
npm test

# Run specific test suites
npm run test:ui          # UI tests only
npm run test:api         # API tests only
npm run test:e2e         # E2E tests only
npm run test:ui:auth     # Auth tests only

# Run with options
npm run test:headed      # With browser visible
npm run test:debug       # Debug mode
npm run test:chrome      # Chrome only
npm run test:firefox     # Firefox only
```

## Test Reports

### Playwright HTML Report
```bash
npm run report
```
Opens at: http://localhost:9323

### Allure Report
```bash
npm run allure:report
```
Generates and opens Allure report with:
- Test execution overview
- Pass/fail statistics
- Screenshots on failure
- Detailed test steps

## Test Coverage

| Module | Tests | Status |
|--------|-------|--------|
| Login | 8 | ✅ |
| Logout | 3 | ✅ |
| Registration | 11 | ✅ |
| **Total** | **22** | **All Passing** |

## Page Objects

| Page | Description |
|------|-------------|
| BasePage | Base class with common methods |
| HomePage | Home page navigation and search |
| LoginPage | User login functionality |
| RegisterPage | User registration |
| ProductPage | Product details and add to cart |
| SearchPage | Search results |
| CartPage | Shopping cart operations |
| AccountPage | User account management |

## Key Features

- **Page Object Model** - Clean separation of test logic and page interactions
- **Fixtures** - Reusable page object instances
- **Multi-browser support** - Chrome, Firefox, WebKit
- **Parallel execution** - Configurable workers
- **Auto-retry** - Flaky test handling
- **Screenshots/Videos** - Captured on failure
- **Dual Reporting** - Playwright HTML + Allure
- **Bot Detection Bypass** - Handles redirect pages

## Scripts Reference

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run test:headed` | Run with browser visible |
| `npm run test:debug` | Run in debug mode |
| `npm run test:ui` | Run UI tests |
| `npm run test:api` | Run API tests |
| `npm run test:e2e` | Run E2E tests |
| `npm run report` | Open Playwright report |
| `npm run allure:report` | Generate & open Allure report |
| `npm run codegen` | Open Playwright codegen |

## Graphify Integration

Visualize codebase structure:
```bash
graphify .                    # Generate graph
graphify . --update           # Update graph
graphify query "login"        # Query nodes
```

View interactive graph: `graphify-out/graph.html`

## Contributing

1. Create a feature branch
2. Add tests following POM pattern
3. Ensure all tests pass
4. Submit pull request

## License

ISC
