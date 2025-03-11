# Testing - Akshay Saini

# Introduction
- Earlier people used to do tests using ENZYME
- In today’s world JEST and REACT TESTING LIBRARY

## Why do we need test cases?
- When we add new code/feature,it is not breaking our existing code/feature.
- Suppose we have 1000s of components, and we add 1 more component, how sure can we be that we are not breaking any one of the 1000 components. - Testing gives us that confidence.
- It gives us maintainable code for big teams.

## JARGONS
### Test Driven Development(TDD)
- We write test cases even before we write our code.
- Is it bad or good? : It is very good. - We will always have 100% test coverage. - Good quality code.
- **PROBLEM**:The development process becomes very special.
- Companies don't follow this.
- It needs a different mindset altogether.

### Different types of Testing
- **MANUAL TESTING** - 
- **AUTOMATION TESTING** - *Selenium*(E2E Testing)
- **End To End(E2E) Testing** - *Cypress* - Tests whole flow, Covers entire user journey - This part is off loaded to QA team.
  - They use a headless browser(Kind of actual browser but no UI), with headless browser we can execute test cases faster. It does not have to  paint. It will have Virtual DOM and diffing algorithms.
- **UNIT TESTING** - Core job of developers
- **INTEGRATION TESTING** - Also done by developers - Is the integration between components working?
- **REGRESSION TESTING**
- **SMOKE TESTING**
- **PERFORMANCE TESTING**

- Testing is like development - Time, effort, mindset is required.

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