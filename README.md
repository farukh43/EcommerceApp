<p align="center">
  <img src="docs/images/logo.png" alt="eCommerce Test Automation" width="200"/>
</p>

<h1 align="center">eCommerce Playwright Test Automation</h1>

<p align="center">
  <strong>Enterprise-grade end-to-end test automation framework for e-commerce applications</strong>
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright"/></a>
  <a href="#"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/></a>
  <a href="#"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/></a>
  <a href="#"><img src="https://img.shields.io/badge/Allure-FF5722?style=for-the-badge&logo=allure&logoColor=white" alt="Allure"/></a>
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/Tests-22%20Passed-success?style=flat-square" alt="Tests"/></a>
  <a href="#"><img src="https://img.shields.io/badge/Coverage-Auth%20Module-blue?style=flat-square" alt="Coverage"/></a>
  <a href="#"><img src="https://img.shields.io/badge/License-ISC-yellow?style=flat-square" alt="License"/></a>
  <a href="#"><img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square" alt="PRs Welcome"/></a>
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Running Tests](#-running-tests)
- [Reports](#-reports)
- [Test Coverage](#-test-coverage)
- [Features](#-features)
- [Contributing](#-contributing)

---

## 🎯 Overview

A robust, scalable test automation framework built with **Playwright** and **TypeScript** for testing [TutorialsNinja](https://tutorialsninja.com/demo/) e-commerce platform. Implements industry best practices including Page Object Model, data-driven testing, and comprehensive reporting.

<p align="center">
  <img src="docs/images/graphify-architecture.png" alt="Architecture Diagram" width="800"/>
</p>

---

## 🛠 Tech Stack

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://playwright.dev/img/playwright-logo.svg" width="48" height="48" alt="Playwright" />
      <br>Playwright
    </td>
    <td align="center" width="96">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="48" height="48" alt="TypeScript" />
      <br>TypeScript
    </td>
    <td align="center" width="96">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" width="48" height="48" alt="Node.js" />
      <br>Node.js
    </td>
    <td align="center" width="96">
      <img src="https://avatars.githubusercontent.com/u/5879127?s=200&v=4" width="48" height="48" alt="Allure" />
      <br>Allure
    </td>
    <td align="center" width="96">
      <img src="https://faker.js.dev/logo.svg" width="48" height="48" alt="Faker.js" />
      <br>Faker.js
    </td>
  </tr>
</table>

### Technologies & Tools

| Category | Technologies |
|----------|-------------|
| **Test Framework** | ![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=flat-square&logo=playwright&logoColor=white) |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| **Runtime** | ![Node.js](https://img.shields.io/badge/Node.js_v18+-339933?style=flat-square&logo=nodedotjs&logoColor=white) |
| **Reporting** | ![Allure](https://img.shields.io/badge/Allure-FF5722?style=flat-square) ![HTML Report](https://img.shields.io/badge/Playwright_HTML-45ba4b?style=flat-square) |
| **Test Data** | ![Faker.js](https://img.shields.io/badge/Faker.js-5B21B6?style=flat-square) |
| **Visualization** | ![Graphify](https://img.shields.io/badge/Graphify-4A90D9?style=flat-square) |
| **CI/CD Ready** | ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white) |

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        TEST LAYER                                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │  UI Tests   │  │  API Tests  │  │  E2E Tests  │              │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘              │
└─────────┼────────────────┼────────────────┼─────────────────────┘
          │                │                │
┌─────────▼────────────────▼────────────────▼─────────────────────┐
│                      FIXTURES LAYER                              │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │              Page Object Instances                        │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────┬───────────────────────────────────┘
                              │
┌─────────────────────────────▼───────────────────────────────────┐
│                    PAGE OBJECT LAYER                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐           │
│  │ HomePage │ │LoginPage │ │ CartPage │ │MorePages │           │
│  └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘           │
│       └────────────┴────────────┴────────────┘                  │
│                         │                                        │
│              ┌──────────▼──────────┐                            │
│              │      BasePage       │                            │
│              └─────────────────────┘                            │
└─────────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────▼───────────────────────────────────┐
│                     UTILITIES LAYER                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐           │
│  │ TestData │ │ Helpers  │ │  Config  │ │  Allure  │           │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘           │
└─────────────────────────────────────────────────────────────────┘
```

### Codebase Visualization (Graphify)

<p align="center">
  <img src="docs/images/graphify-codebase.png" alt="Codebase Graph" width="800"/>
</p>

> 📊 **Interactive Graph**: Open `graphify-out/graph.html` in your browser for interactive exploration

---

## 📁 Project Structure

```
eCommerceApp/
│
├── 📂 src/
│   ├── 📂 pages/                    # Page Object Model classes
│   │   ├── BasePage.ts              # 🔷 Base class (25 connections)
│   │   ├── HomePage.ts              # 🏠 Home page actions
│   │   ├── LoginPage.ts             # 🔐 Login functionality
│   │   ├── RegisterPage.ts          # 📝 Registration
│   │   ├── ProductPage.ts           # 🛍️ Product details
│   │   ├── SearchPage.ts            # 🔍 Search results
│   │   ├── CartPage.ts              # 🛒 Shopping cart
│   │   └── AccountPage.ts           # 👤 User account
│   │
│   ├── 📂 tests/
│   │   ├── 📂 ui/                   # UI functional tests
│   │   │   ├── 📂 auth/             # ✅ Authentication (22 tests)
│   │   │   ├── 📂 products/         # 🛍️ Product tests
│   │   │   ├── 📂 cart/             # 🛒 Cart tests
│   │   │   └── 📂 checkout/         # 💳 Checkout tests
│   │   ├── 📂 api/                  # API tests
│   │   └── 📂 e2e/                  # End-to-end flows
│   │
│   ├── 📂 fixtures/                 # Playwright fixtures
│   ├── 📂 data/                     # Test data (Faker.js)
│   ├── 📂 config/                   # Configuration
│   └── 📂 utils/                    # Helper utilities
│
├── 📂 reports/                      # Playwright HTML reports
├── 📂 allure-results/               # Allure raw data
├── 📂 allure-report/                # Allure HTML report
├── 📂 graphify-out/                 # Codebase visualization
├── 📂 docs/                         # Documentation & images
│
├── 📄 playwright.config.ts          # Playwright configuration
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 package.json                  # Dependencies
└── 📄 CLAUDE.md                     # AI assistant context
```

---

## 🚀 Getting Started

### Prerequisites

| Requirement | Version |
|------------|---------|
| Node.js | v18.0+ |
| npm | v9.0+ |
| Git | Latest |

### Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/farukh43/EcommerceApp.git

# 2️⃣ Navigate to project
cd EcommerceApp

# 3️⃣ Install dependencies
npm install

# 4️⃣ Install Playwright browsers
npx playwright install

# 5️⃣ Set up environment
cp .env.example .env
```

### Configuration

Update `.env` with your credentials:
```env
TEST_USER_EMAIL=your_email@example.com
TEST_USER_PASSWORD=your_password
```

---

## ▶️ Running Tests

### Quick Start

```bash
# Run all tests
npm test

# Run with UI mode
npm run test:headed
```

### Test Commands

| Command | Description | Icon |
|---------|-------------|------|
| `npm test` | Run all tests | 🧪 |
| `npm run test:headed` | Run with browser visible | 👁️ |
| `npm run test:debug` | Debug mode | 🐛 |
| `npm run test:ui` | UI tests only | 🖥️ |
| `npm run test:api` | API tests only | 🔌 |
| `npm run test:e2e` | E2E tests only | 🔄 |
| `npm run test:chrome` | Chrome only | ![Chrome](https://img.shields.io/badge/-Chrome-4285F4?style=flat-square&logo=google-chrome&logoColor=white) |
| `npm run test:firefox` | Firefox only | ![Firefox](https://img.shields.io/badge/-Firefox-FF7139?style=flat-square&logo=firefox&logoColor=white) |

### Specific Test Suites

```bash
# Authentication tests
npm run test:ui:auth

# Run specific test file
npx playwright test src/tests/ui/auth/login.spec.ts

# Run with specific browser
npx playwright test --project=chromium
```

---

## 📊 Reports

### Playwright HTML Report

```bash
npm run report
```

<p align="center">
  <img src="docs/images/playwright-report.png" alt="Playwright Report" width="700"/>
</p>

### Allure Report

```bash
npm run allure:report
```

<p align="center">
  <img src="docs/images/allure-report.png" alt="Allure Report" width="700"/>
</p>

**Allure Features:**
- 📈 Test execution trends
- 📸 Screenshots on failure
- 🎬 Video recordings
- 📋 Detailed test steps
- 🏷️ Categories & labels

---

## ✅ Test Coverage

### Current Status

<p align="center">

| Module | Tests | Status | Coverage |
|--------|:-----:|:------:|:--------:|
| 🔐 Login | 8 | ✅ | ![100%](https://img.shields.io/badge/-100%25-success?style=flat-square) |
| 🚪 Logout | 3 | ✅ | ![100%](https://img.shields.io/badge/-100%25-success?style=flat-square) |
| 📝 Registration | 11 | ✅ | ![100%](https://img.shields.io/badge/-100%25-success?style=flat-square) |
| 🔍 Search | - | 🔜 | ![0%](https://img.shields.io/badge/-0%25-lightgrey?style=flat-square) |
| 🛒 Cart | - | 🔜 | ![0%](https://img.shields.io/badge/-0%25-lightgrey?style=flat-square) |
| 💳 Checkout | - | 🔜 | ![0%](https://img.shields.io/badge/-0%25-lightgrey?style=flat-square) |

</p>

### Test Results Summary

```
✅ Total Tests: 22
✅ Passed: 22
❌ Failed: 0
⏱️ Duration: ~2.2 minutes
```

---

## ✨ Features

<table>
  <tr>
    <td>
      <h3>🎯 Page Object Model</h3>
      <p>Clean separation of test logic and page interactions for maintainable tests</p>
    </td>
    <td>
      <h3>🔄 Multi-Browser</h3>
      <p>Cross-browser testing with Chrome, Firefox, and WebKit support</p>
    </td>
  </tr>
  <tr>
    <td>
      <h3>📊 Dual Reporting</h3>
      <p>Comprehensive reports with Playwright HTML and Allure integration</p>
    </td>
    <td>
      <h3>🎲 Faker.js Data</h3>
      <p>Cryptographically secure random test data generation</p>
    </td>
  </tr>
  <tr>
    <td>
      <h3>📸 Auto Screenshots</h3>
      <p>Automatic screenshot capture on test failures</p>
    </td>
    <td>
      <h3>🎬 Video Recording</h3>
      <p>Video recordings for failed tests debugging</p>
    </td>
  </tr>
  <tr>
    <td>
      <h3>🔁 Auto Retry</h3>
      <p>Configurable retry mechanism for flaky tests</p>
    </td>
    <td>
      <h3>📈 Graphify</h3>
      <p>Interactive codebase visualization and analysis</p>
    </td>
  </tr>
</table>

---

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `playwright.config.ts` | Playwright settings, browsers, timeouts |
| `tsconfig.json` | TypeScript compiler options |
| `.env` | Environment variables (credentials) |
| `allure-categories.json` | Allure report categories |
| `.mcp.json` | Playwright MCP server config |
| `CLAUDE.md` | AI assistant project context |

---

## 📚 Page Objects

```typescript
// Example: LoginPage usage
import { LoginPage } from './pages/LoginPage';

const loginPage = new LoginPage(page);
await loginPage.goToLoginPage();
await loginPage.login('user@example.com', 'password');
```

| Page | Methods | Description |
|------|---------|-------------|
| **BasePage** | `navigate()`, `waitForPageLoad()` | Base class with common methods |
| **HomePage** | `goToLogin()`, `searchProduct()` | Home page navigation |
| **LoginPage** | `login()`, `getErrorMessage()` | User authentication |
| **RegisterPage** | `register()`, `fillForm()` | New user registration |
| **ProductPage** | `addToCart()`, `setQuantity()` | Product interactions |
| **CartPage** | `updateQuantity()`, `checkout()` | Cart management |

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to branch (`git push origin feature/AmazingFeature`)
5. **Open** Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

<p align="center">
  <strong>Built with ❤️ using Playwright & TypeScript</strong>
</p>

<p align="center">
  <a href="https://github.com/farukh43/EcommerceApp">
    <img src="https://img.shields.io/badge/⭐_Star_this_repo-yellow?style=for-the-badge" alt="Star"/>
  </a>
</p>
