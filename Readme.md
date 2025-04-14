# Testing - Akshay Saini

# Introduction
- Earlier people used to do tests using ENZYME
- In today’s world JEST and REACT TESTING LIBRARY

## Why do we need test cases?
- When we add new code/feature,it is not breaking our existing code/feature.
- Suppose we have 1000s of components, and we add 1 more component, how sure can we be sure that we are not breaking any one of the 1000 components. - Testing gives us that confidence.
- It gives us maintainable code for big teams.

## JARGONS
### Test Driven Development(TDD)
- We write test cases even before we write our code.
- Is it bad or good? : It is very good. - We will always have 100% test coverage. - Good quality code.
- **PROBLEM**:The development process becomes very slow.
- Companies don't follow this.
- It needs a different mindset altogether.


### **Types of Software Testing**

Software testing ensures the quality, performance, and correctness of applications. It can be broadly categorized into **Manual Testing** and **Automation Testing**, with several subtypes based on scope and purpose.

---

**1. Manual Testing**
Testing is performed manually by a tester without the use of tools or scripts.
- Best for exploratory, usability, and ad-hoc testing.
- Time-consuming but helps understand user perspective better.
- Used when automation isn't cost-effective or possible.

---

**2. Automation Testing**
Tests are executed automatically using tools, frameworks, or scripts.
- Faster, repeatable, and suitable for large-scale projects.
- Reduces human error.
- **Common Tools:**
  - **Selenium** – Used for *End-to-End (E2E)* testing in web apps.
  - **Cypress** – Also used for E2E testing; popular for fast, reliable browser tests.
  - **Playwright**, **Puppeteer** – Modern tools supporting multiple browsers.

---

### **Test Types Based on Scope**

**3. Unit Testing**
- **Who?** Developers
- **What?** Individual units/components (functions, methods, classes).
- **Goal:** Verify each part of the code works as expected in isolation.
- **Tools:** Jest, JUnit, NUnit, pytest

---

**4. Integration Testing**
- **Who?** Developers
- **What?** Interaction between integrated modules/components.
- **Goal:** Ensure components work together as intended.
- **Tools:** JUnit, Mocha, Postman (for APIs), pytest

---

**5. End-to-End (E2E) Testing**
- **Who?** QA Team (often automated)
- **What?** Full user flow from start to finish.
- **Goal:** Test the entire system – like a real user would interact.
- Uses **headless browsers** (no UI, faster execution).
- **Tools:** Cypress, Selenium, Playwright, TestCafe

---

### **Test Types Based on Purpose**

**6. Regression Testing**
- **When?** After bug fixes, enhancements, or code changes.
- **Goal:** Ensure existing functionality hasn’t broken.

---

**7. Smoke Testing**
- **What?** Basic tests to verify critical functionalities work.
- **Goal:** "Is the build stable enough to proceed with further testing?"

---

**8. Performance Testing**
- *Goal:** Measure system performance under various conditions.
- **Subtypes:**
  - **Load Testing** – Expected load
  - **Stress Testing** – Beyond expected load
  - **Spike Testing** – Sudden increases in load
  - **Endurance Testing** – Extended load duration
- **Tools:** JMeter, Locust, Gatling, k6

---

### **Additional Types**

**9. Usability Testing**
- **Goal:** Evaluate user experience and ease of use.
- **Performed by:** Real users or UX experts.

---

###  **10. Security Testing**
- **Goal:** Identify vulnerabilities and ensure data protection.
- **Tools:** OWASP ZAP, Burp Suite

---

**11. Compatibility Testing**
- **Goal:** Check app on various browsers, devices, OS, and networks.

---

**12. Acceptance Testing**
- **Who?** Client or QA team
- **Goal:** Validate the system meets business requirements.
- **Types:** Alpha (in-house), Beta (real users)

---

**Summary Table**

| Type                  | Done By       | Purpose                                | Tool Examples             |
|-----------------------|---------------|----------------------------------------|---------------------------|
| Manual Testing        | Tester         | Exploratory/Ad-hoc                     | None                      |
| Automation Testing    | QA/Dev         | Speed, repetition                      | Selenium, Cypress         |
| Unit Testing          | Developer      | Test individual code units             | Jest, JUnit, pytest       |
| Integration Testing   | Developer      | Test component interaction             | Mocha, Postman            |
| E2E Testing           | QA/Automation  | Test full user flow                    | Cypress, Playwright       |
| Regression Testing    | QA/Automation  | Check old features after changes       | Selenium, TestNG          |
| Smoke Testing         | QA             | Sanity check                           | Manual/Scripts            |
| Performance Testing   | QA/DevOps      | Test system speed & stability          | JMeter, k6                |
| Usability Testing     | UX/Users       | Improve user experience                | Observation               |
| Security Testing      | Security Team  | Find vulnerabilities                   | OWASP ZAP, Burp Suite     |
| Compatibility Testing | QA             | Cross-platform/browser testing         | BrowserStack              |
| Acceptance Testing    | Client/QA      | Business requirement validation        | Manual/Scripts            |

---
- ***Testing is like development - Time, effort, mindset is required***.

## JEST and JS Testing
- It is a delightful JS testing framework.

**STEPS**
1. Install `RTL` : Not required for just JS Testing but required for REACT.
2. Install `JEST`
3. Configure JEST: `npx jest --init`
   
```bash
The following questions will help Jest to create a suitable configuration for your project
√ Would you like to use Jest when running "test" script in "package.json"? ... yes
√ Would you like to use Typescript for the configuration file? ... no 
√ Choose the test environment that will be used for testing » jsdom (browser-like)
√ Do you want Jest to add coverage reports? ... yes
√ Which provider should be used to instrument code for coverage? » babel
√ Automatically clear mock calls, instances, contexts and results before every test? ... yes
```
- It will create a `jest.config.js` with the above settings.

4. Ideally, it should add the following script in `package.json` : `"test":"jest"`, If not, then add it.
5. Try to run `npm run test`: Following error will be shown:
```bash
● Validation Error:

  Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

  Configuration Documentation:
  https://jestjs.io/docs/configuration


As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.
```
6. Install `jest-environment-jsom` : `npm i -D jest-environment-jsdom`
7. Now when we run `npm run test`: It won't give any error.
   1. It won't find any test cases.
   2. In the following output, we see: It is trying to look inside `__tests__` folder 

```bash
 6 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: \\node_modules\\ - 6 matches
  testRegex:  - 0 matches
Pattern:  - 0 matches
```

8. Create test file - Inside components - create folder `__tests__` (__ is called **dunder**)
9. Create a file `Sum.js`
```js
export function sum(a, b) {
  return a + b;
}
```
10. Create a file `sum.test.js`(Just a convention to name test files like these.) in **__tests__** folder
```js
import { sum } from "../sum";
test("Check sum of 2 positive numbers", () => {
  expect(sum(2, 5)).toBe(7);
});
```
11. Now again run: `npm run test` : It will fail saying **"Can't use import statements."**
12. To fix this we have to use ***babel***(Jest doesn't support ES6 import export, so we need to configure babel-jest to make jest understand our code): Run the following command: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
13. Create a `.babelrc` file in the root directory and add the following
```json
{
    "presets": [["@babel/preset-env", {"targets": {"node": "current"}}]]
}
```
14. Now run `npm run test` and tests will be working.

- Run test command after closing the dev server, it will still run that means it is not running on browser. (jsdom makes it happen)

## React Testing Library and Testing React using RTL and JEST
- RTL is a part of Testing Library.
- RTL uses jest behind the scenes.

```js
import { render } from "@testing-library/react";
import Navbar from "../Navbar/Navbar";
test("Logo should load on rendering Navbar", () => {
  //Load Navbar
  const navbar = render(<Navbar />);
  console.log(navbar);
  //check if logo is loaded
});
```

```bash
 Support for the experimental syntax 'jsx' isn't currently enabled (5:25):
```

```json
{
    "presets": [
        ["@babel/preset-env", {"targets": {"node": "current"}}],
        ["@babel/preset-react",{"runtime":"automatic"}]
    ]
}
```

Also install : `npm i -D @babel/preset-react`


// Module name mapper is the place where we can tell jest that all the png image take it from dummy image

"\\.(jpg|png|svg)$": "./mocks/dummyLogo.js",