# QA Testing Repository

This repository contains Quality Assurance materials and test automation frameworks for testing web applications.

## Contents

### 📚 Study Materials
- **Material/syllabus_ctfl_3.1.pdf** - CTFL (Certified Tester Foundation Level) 3.1 Syllabus

### 🔧 Test Automation
- **Cypress E2E Testing Framework** - Automated testing for SwagLabs application

## Cypress Tests

### Prerequisites
```bash
# Install Node.js (v14 or higher)
# Install dependencies
npm install cypress --save-dev
```

### Test Structure
```
cypress/
├── e2e/
│   ├── login.cy.js      # Login functionality tests
│   └── carrinho.cy.js   # Shopping cart functionality tests
├── fixtures/
│   └── example.json     # Test data fixtures
└── support/
    ├── commands.js      # Custom Cypress commands
    └── e2e.js          # Support file for e2e tests
```

### Running Tests
```bash
# Open Cypress Test Runner
npx cypress open

# Run tests headlessly
npx cypress run
```

### Test Cases Covered

#### Login Tests (login.cy.js)
- ✅ Valid user login
- ✅ Invalid credentials handling
- ✅ Login form validation

#### Shopping Cart Tests (carrinho.cy.js)
- ✅ Add products to cart
- ✅ Remove products from cart
- ✅ Cart checkout process
- ✅ Cart persistence

### Configuration
- **cypress.config.js** - Main Cypress configuration
- **jsconfig.json** - JavaScript configuration for IDE support

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run Cypress: `npx cypress open`
4. Select E2E Testing
5. Choose your browser
6. Run the test files

## Target Application
The tests are designed for the SwagLabs demo application (https://www.saucedemo.com/)

## Contributing
When adding new tests:
1. Follow the existing naming convention
2. Add proper test descriptions
3. Use page object patterns where applicable
4. Update this README with new test coverage
