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
  - They use a headless browser(Kind of actual browser but no UI), with headless browser we can execute test cases faster.