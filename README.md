<h1 align="center">eCommerce Playwright Test Automation</h1>

<p align="center">
  <strong>Enterprise-grade end-to-end test automation framework for e-commerce applications</strong>
</p>

<p align="center">
  <a href="https://github.com/farukh43/EcommerceApp/actions/workflows/playwright.yml"><img src="https://github.com/farukh43/EcommerceApp/actions/workflows/playwright.yml/badge.svg" alt="Playwright Tests"/></a>
  <a href="https://github.com/farukh43/EcommerceApp"><img src="https://img.shields.io/github/last-commit/farukh43/EcommerceApp?style=flat-square" alt="Last Commit"/></a>
  <a href="https://github.com/farukh43/EcommerceApp"><img src="https://img.shields.io/github/languages/code-size/farukh43/EcommerceApp?style=flat-square" alt="Code Size"/></a>
  <a href="https://github.com/farukh43/EcommerceApp/blob/main/LICENSE"><img src="https://img.shields.io/github/license/farukh43/EcommerceApp?style=flat-square" alt="License"/></a>
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright"/></a>
  <a href="#"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/></a>
  <a href="#"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/></a>
  <a href="#"><img src="https://img.shields.io/badge/Allure-FF5722?style=for-the-badge&logo=qameta&logoColor=white" alt="Allure"/></a>
</p>

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Reports](#reports)
- [Features](#features)
- [Contributing](#contributing)

---

## Overview

A robust, scalable test automation framework built with **Playwright** and **TypeScript** for testing [TutorialsNinja](https://tutorialsninja.com/demo/) e-commerce platform. Implements industry best practices including Page Object Model, data-driven testing, and comprehensive reporting.

---

## Tech Stack

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
      <img src="https://fakerjs.dev/logo.svg" width="48" height="48" alt="Faker.js" />
      <br>Faker.js
    </td>
  </tr>
</table>

| Category | Technologies |
|----------|-------------|
| **Test Framework** | Playwright with TypeScript |
| **Language** | TypeScript 5.x |
| **Runtime** | Node.js v18+ |
| **Reporting** | Playwright HTML + Allure |
| **Test Data** | Faker.js (Cryptographically Secure) |
| **Visualization** | Graphify |
| **CI/CD** | GitHub Actions |

---

## Architecture

```mermaid
flowchart TB
    subgraph Tests["Test Layer"]
        UI["UI Tests"]
        API["API Tests"]
        E2E["E2E Tests"]
    end

    subgraph Fixtures["Fixtures Layer"]
        PO["Page Object Instances"]
    end

    subgraph Pages["Page Object Layer"]
        HP["HomePage"]
        LP["LoginPage"]
        RP["RegisterPage"]
        PP["ProductPage"]
        CP["CartPage"]
        SP["SearchPage"]
        AP["AccountPage"]
        BP["BasePage"]
    end

    subgraph Utils["Utilities Layer"]
        TD["TestData"]
        HLP["Helpers"]
        CFG["Config"]
        ALR["Allure"]
    end

    Tests --> Fixtures
    Fixtures --> Pages
    HP --> BP
    LP --> BP
    RP --> BP
    PP --> BP
    CP --> BP
    SP --> BP
    AP --> BP
    Pages --> Utils
```

### Class Relationships

```mermaid
classDiagram
    class BasePage {
        +Page page
        +navigate()
        +waitForPageLoad()
        +handleRedirectPage()
    }

    class HomePage {
        +goToLogin()
        +goToRegister()
        +searchProduct()
    }

    class LoginPage {
        +login()
        +getErrorMessage()
    }

    class RegisterPage {
        +register()
        +fillForm()
    }

    class ProductPage {
        +addToCart()
        +setQuantity()
    }

    class CartPage {
        +updateQuantity()
        +checkout()
    }

    BasePage <|-- HomePage
    BasePage <|-- LoginPage
    BasePage <|-- RegisterPage
    BasePage <|-- ProductPage
    BasePage <|-- CartPage
```

### Test Flow

```mermaid
sequenceDiagram
    participant T as Test
    participant F as Fixture
    participant P as Page Object
    participant B as Browser

    T->>F: Request page objects
    F->>B: Launch browser
    F->>P: Create page instances
    F-->>T: Return page objects
    T->>P: Execute test actions
    P->>B: Interact with page
    B-->>P: Return results
    P-->>T: Return status
    T->>T: Assert results
```

---

## Project Structure

<!-- AUTO-GENERATED: Run `npm run docs:structure` to update -->
```
eCommerceApp/
├── src/
│   ├── pages/                    # Page Object Model classes
│   │   ├── BasePage.ts           # Base class with common methods
│   │   ├── HomePage.ts           # Home page actions
│   │   ├── LoginPage.ts          # Login functionality
│   │   ├── RegisterPage.ts       # Registration
│   │   ├── ProductPage.ts        # Product details
│   │   ├── SearchPage.ts         # Search results
│   │   ├── CartPage.ts           # Shopping cart
│   │   └── AccountPage.ts        # User account
│   │
│   ├── tests/
│   │   ├── ui/                   # UI functional tests
│   │   │   ├── auth/             # Authentication tests
│   │   │   ├── products/         # Product tests
│   │   │   ├── cart/             # Cart tests
│   │   │   └── checkout/         # Checkout tests
│   │   ├── api/                  # API tests
│   │   └── e2e/                  # End-to-end flows
│   │
│   ├── fixtures/                 # Playwright fixtures
│   ├── data/                     # Test data (Faker.js)
│   ├── config/                   # Configuration
│   └── utils/                    # Helper utilities
│
├── reports/                      # Playwright HTML reports
├── allure-results/               # Allure raw data
├── allure-report/                # Allure HTML report
├── graphify-out/                 # Codebase visualization
│
├── playwright.config.ts          # Playwright configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies
└── CLAUDE.md                     # AI assistant context
```

---

## Getting Started

### Prerequisites

| Requirement | Version |
|------------|---------|
| Node.js | v18.0+ |
| npm | v9.0+ |
| Git | Latest |

### Installation

```bash
# Clone the repository
git clone https://github.com/farukh43/EcommerceApp.git

# Navigate to project
cd EcommerceApp

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Set up environment
cp .env.example .env
```

### Configuration

Update `.env` with your credentials:
```env
TEST_USER_EMAIL=your_email@example.com
TEST_USER_PASSWORD=your_password
```

---

## Running Tests

### Quick Start

```bash
# Run all tests
npm test

# Run with UI mode
npm run test:headed
```

### Test Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run test:headed` | Run with browser visible |
| `npm run test:debug` | Debug mode |
| `npm run test:ui` | UI tests only |
| `npm run test:api` | API tests only |
| `npm run test:e2e` | E2E tests only |
| `npm run test:chrome` | Chrome only |
| `npm run test:firefox` | Firefox only |

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

## Reports

### Playwright HTML Report

```bash
npm run report
```

### Allure Report

```bash
npm run allure:report
```

**Allure Features:**
- Test execution trends
- Screenshots on failure
- Video recordings
- Detailed test steps
- Categories & labels

### Graphify Visualization

```bash
# Generate codebase visualization
npm run graphify

# Open interactive graph
# Open graphify-out/graph.html in browser
```

---

## Features

```mermaid
mindmap
  root((Framework))
    Page Object Model
      Clean separation
      Maintainable tests
      Reusable components
    Multi-Browser
      Chrome
      Firefox
      WebKit
    Reporting
      Playwright HTML
      Allure Reports
      Screenshots
      Videos
    Test Data
      Faker.js
      Secure random
      Realistic data
    CI/CD
      GitHub Actions
      Auto testing
      Badge updates
    Visualization
      Graphify
      Code analysis
      Dependency graph
```

| Feature | Description |
|---------|-------------|
| **Page Object Model** | Clean separation of test logic and page interactions |
| **Multi-Browser** | Cross-browser testing with Chrome, Firefox, WebKit |
| **Dual Reporting** | Playwright HTML and Allure integration |
| **Faker.js Data** | Cryptographically secure random test data |
| **Auto Screenshots** | Automatic capture on test failures |
| **Video Recording** | Video recordings for debugging |
| **Auto Retry** | Configurable retry for flaky tests |
| **Graphify** | Interactive codebase visualization |

---

## Test Coverage

```mermaid
pie title Test Coverage by Module
    "Login" : 8
    "Logout" : 3
    "Registration" : 11
```

| Module | Tests | Status |
|--------|:-----:|:------:|
| Login | 8 | Completed |
| Logout | 3 | Completed |
| Registration | 11 | Completed |
| Search | - | Planned |
| Cart | - | Planned |
| Checkout | - | Planned |

---

## Configuration Files

| File | Purpose |
|------|---------|
| `playwright.config.ts` | Playwright settings, browsers, timeouts |
| `tsconfig.json` | TypeScript compiler options |
| `.env` | Environment variables (credentials) |
| `allure-categories.json` | Allure report categories |
| `.mcp.json` | Playwright MCP server config |
| `CLAUDE.md` | AI assistant project context |

---

## Contributing

1. **Fork** the repository
2. **Create** feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to branch (`git push origin feature/AmazingFeature`)
5. **Open** Pull Request

---

## License

This project is licensed under the **ISC License**.

---

<p align="center">
  <strong>Built with Playwright & TypeScript</strong>
</p>

<p align="center">
  <a href="https://github.com/farukh43/EcommerceApp/stargazers">
    <img src="https://img.shields.io/github/stars/farukh43/EcommerceApp?style=social" alt="Stars"/>
  </a>
  <a href="https://github.com/farukh43/EcommerceApp/network/members">
    <img src="https://img.shields.io/github/forks/farukh43/EcommerceApp?style=social" alt="Forks"/>
  </a>
</p>
