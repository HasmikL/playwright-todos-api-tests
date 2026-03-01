# Playwright API Test Automation Framework 🚀

End-to-end API automation framework built with **Playwright + TypeScript**, designed to validate RESTful endpoints using scalable test architecture and CI integration.

This project focuses on automated API validation for a Todos service, covering CRUD operations, response validation, and structured test design.

 
 👩‍💻 Author

Hasmik L. 
QA Automation Engineer | Playwright | API & UI Automation | Test Architecture  
GitHub: https://github.com/HasmikL   

📌 Project Overview

This framework validates API behavior using Playwright’s built-in API testing capabilities.

The test suite includes:

- ✅ GET – Retrieve todos
- ✅ POST – Create new todo
- ✅ PATCH – Update existing todo
- ✅ Status code validation
- ✅ Response body validation
- ✅ Schema-like structural validation
- ✅ Parameterized scenarios
- ✅ Automated CI execution

The goal is to demonstrate clean, maintainable, and scalable API automation suitable for production environments.

🏗 Architecture & Design

Test Structure

Tests are located inside:
tests/


Each test:

- Uses Playwright’s `request` fixture
- Validates HTTP status codes
- Verifies response payload structure
- Includes positive and negative scenarios
- Uses clean, readable assertions

🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| Playwright | API automation framework |
| TypeScript | Type safety & maintainability |
| Node.js & npm | Dependency management |
| GitHub Actions | CI pipeline execution |
| HTML Reporter | Test reporting |




🔧 Installation

Clone the repository:
git clone https://github.com/HasmikL/playwright-api-tests.git

Navigate to the project folder:
cd playwright-api-tests

Install dependencies:
npm install

Install Playwright browsers:
npx playwright install

🚀 Running Tests

Run all tests:
npx playwright test

Run a specific file:
npx playwright test tests/todos.spec.ts

Run in headed mode:
npx playwright test --headed

Open the HTML report:
npx playwright show-report

🧪 Test Coverage

GET /todos

Validate status code (200)

Validate response array

Validate required fields (id, title, completed)

POST /todos

Validate resource creation

Validate returned payload structure

Validate correct status code

PATCH /todos/{id}

Validate partial updates

Confirm updated fields

Validate response consistency

🔄 Continuous Integration

The project includes a GitHub Actions workflow located in .github/workflows/.

The CI pipeline:

Installs dependencies

Installs Playwright

Executes the test suite

Fails on test failure

Generates HTML reports

This ensures automated validation on every push to main.

🎯 Key Skills Demonstrated

API automation using Playwright

REST API validation strategies

HTTP method coverage (GET, POST, PATCH)

Response structure verification

Clean TypeScript architecture

CI/CD integration with GitHub Actions

Professional test reporting

📈 Project Value

✔ Production-ready API test structure

✔ Clean and maintainable automation design

✔ Real-world QA engineering practices

✔ CI-integrated automated validation

✔ Scalable test architecture
