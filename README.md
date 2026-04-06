# QA Automation Framework - Playwright

Automation framework built with Playwright and TypeScript for UI, API, and integration testing, following clean architecture principles and best practices used in real-world projects.

---

## 🚀 Features

* UI Automation using Playwright
* API Testing using Playwright request context
* Integration Testing (API + UI validation)
* Page Object Model (POM)
* Custom Fixtures (dependency injection)
* Data-driven testing
* CI/CD pipeline with GitHub Actions

---

## 📁 Project Structure

tests/
├── auth/           # UI tests
├── api/            # API tests
├── integration/    # API + UI tests

pages/              # Page Object Model
fixtures/           # Custom fixtures
api/                # API layer (clients)
test-data/          # Test data

.github/workflows/  # CI/CD pipeline

---

## ▶️ Running Tests

Run all tests:

npx playwright test

Run specific suite:

npx playwright test tests/api
npx playwright test tests/auth
npx playwright test tests/integration

---

## 🧪 Debugging

Run tests in UI mode:

npx playwright test --ui

Run in headed mode:

npx playwright test --headed

---

## 📊 Reports

Generate and open HTML report:

npx playwright show-report

---

## 🔄 CI/CD

This project includes a GitHub Actions pipeline that:

* Installs dependencies
* Installs Playwright browsers
* Executes tests automatically on push
* Generates HTML reports as artifacts

---

## 🧠 Design Approach

The framework is structured to separate responsibilities:

* **Pages** → UI interactions (POM)
* **Tests** → Validation logic only
* **Fixtures** → Dependency injection and setup
* **API Layer** → Backend communication
* **Test Data** → Externalized test inputs

This improves maintainability, scalability, and test reliability.

---

## 📌 Notes

* Tests are designed to be stable and avoid flaky behavior
* Selectors are implemented using Playwright best practices
* API and UI validations are combined for end-to-end coverage

---

## 👨‍💻 Author

Wilson Galindo
