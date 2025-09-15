# 🧪 SauceDemo Complete Testing Assignment

**Manual Testing → Test Case Creation → Automation Implementation**

---

## 📝 Student Information
**Name:** ___________________________  
**Date:** ___________________________

---

## 🌐 Testing Website
**URL:** https://www.saucedemo.com/

**IMPORTANT:** Open this website in a new tab and keep it open during the entire assignment!

### 🔑 Available Login Credentials:

**Valid Users:**
- `standard_user` / `secret_sauce`
- `problem_user` / `secret_sauce`
- `performance_glitch_user` / `secret_sauce`

**Invalid Users:**
- `locked_out_user` / `secret_sauce` (locked account)
- `invalid_user` / `secret_sauce` (doesn't exist)
- `standard_user` / `wrong_password` (wrong password)

---

## ⚠️ Assignment Overview

This assignment has 3 phases that build on each other:
- **Phase 1:** Manual testing (explore the website by hand)
- **Phase 2:** Create detailed test cases (document what you tested)
- **Phase 3:** Write automation code (make the computer do the testing)

---

# 🖱️ PHASE 1: MANUAL EXPLORATION & TESTING

**Goal:** Get familiar with the SauceDemo login functionality by testing it manually first.

## Manual Testing Steps:
1. Open https://www.saucedemo.com/ in a new tab
2. Look at the login page - what do you see? (fields, buttons, text)
3. Try logging in with **standard_user / secret_sauce** - what happens?
4. Log out and try logging in with **invalid_user / secret_sauce** - what happens?
5. Try logging in with **standard_user / wrong_password** - what happens?
6. Try logging in with **locked_out_user / secret_sauce** - what happens?
7. Try submitting the form with empty fields - what happens?

## Document Your Manual Testing Results:

```
Write down what you discovered during manual testing...

Example format:
1. When I tried standard_user with secret_sauce: [describe what happened]
2. When I tried invalid_user with secret_sauce: [describe what happened]
3. When I tried standard_user with wrong_password: [describe what happened]
4. When I tried locked_out_user with secret_sauce: [describe what happened]
5. When I left fields empty and clicked login: [describe what happened]

Also note:
- What does the page look like?
- What elements do you see?
- How does the website behave?
- What error messages do you see?
```

**Your Manual Testing Results:**
```
[Write your observations here]




```

---

# 📋 PHASE 2: CREATE TEST CASES (1 Positive + 2 Negative)

**Goal:** Document your testing in a professional format that other testers can follow.

## 💡 What is a Test Case?
A test case is like a recipe for testing. It tells someone exactly what to do, what to expect, and what happens if the test passes or fails. Every professional QA engineer writes test cases!

## Test Case Template:
```
Test Case ID: TC_LOGIN_001
Test Case Title: [Short description of what you're testing]
Objective: [What is the goal of this test?]
Preconditions: [What needs to be ready before testing?]

Test Steps:
1. [First action to take]
2. [Second action to take]
3. [Third action to take]

Expected Result: [What should happen if everything works correctly?]
Actual Result: [What actually happened when you tested it?]
Status: [PASS or FAIL]
```

## Test Case 1: Positive Test Case (Happy Path)
**Create a test case for successful login with valid credentials**

```
Test Case ID: TC_LOGIN_001
Test Case Title: 
Objective: 
Preconditions: 

Test Steps:
1. 
2. 
3. 

Expected Result: 
Actual Result: 
Status: 
```

## Test Case 2: Negative Test Case #1
**Create a test case for login with invalid username**

```
Test Case ID: TC_LOGIN_002
Test Case Title: 
Objective: 
Preconditions: 

Test Steps:
1. 
2. 
3. 

Expected Result: 
Actual Result: 
Status: 
```

## Test Case 3: Negative Test Case #2
**Create a test case for login with wrong password**

```
Test Case ID: TC_LOGIN_003
Test Case Title: 
Objective: 
Preconditions: 

Test Steps:
1. 
2. 
3. 

Expected Result: 
Actual Result: 
Status: 
```

---

# 🤖 PHASE 3: AUTOMATION IMPLEMENTATION

**Goal:** Write TypeScript code that can automatically perform the same tests you did manually.

## 💡 Why Automation?
Manual testing takes time and humans can make mistakes. Automation lets us run the same tests over and over again quickly and consistently. As a QA automation engineer, you'll write code that tests other code!

## Automation Requirements:

1. Create a class called "SauceDemoLoginTests"
2. Add 3 variables:
   - website URL (string)
   - expected success page title (string) 
   - expected error message for invalid login (string)

3. Add 3 methods to match your 3 test cases:
   - `testValidLogin()` - for positive test case
   - `testInvalidUsername()` - for negative test case #1
   - `testWrongPassword()` - for negative test case #2

4. Each method should:
   - Print what test is running
   - Show the steps being performed
   - Show the expected vs actual results
   - Print PASS or FAIL status

5. Create an instance of your class and run all 3 tests

## Your Automation Code:

```typescript
// Write your complete TypeScript automation code here...

// Example structure to get you started:

class SauceDemoLoginTests {
    // Add your 3 variables here
    websiteUrl: string;
    expectedSuccessTitle: string;
    expectedErrorMessage: string;

    // Constructor to set up the variables
    constructor() {
        this.websiteUrl = 'https://www.saucedemo.com/';
        this.expectedSuccessTitle = 'Swag Labs';
        this.expectedErrorMessage = 'Epic sadface: Username and password do not match any user in this service';
    }

    // Method 1: Test valid login (positive test case)
    testValidLogin(): void {
        console.log('=== RUNNING TEST: Valid Login ===');
        console.log('Step 1: Navigate to ' + this.websiteUrl);
        console.log('Step 2: Enter username: standard_user');
        console.log('Step 3: Enter password: secret_sauce');
        console.log('Step 4: Click Login button');
        
        // Simulate the result you observed during manual testing
        let actualResult = 'Successfully logged in to inventory page';
        let expectedResult = 'User should be logged in and see inventory page';
        
        console.log('Expected Result: ' + expectedResult);
        console.log('Actual Result: ' + actualResult);
        
        if (actualResult.includes('Successfully logged in')) {
            console.log('STATUS: PASS ✅');
        } else {
            console.log('STATUS: FAIL ❌');
        }
        console.log(''); // Empty line for spacing
    }

    // Method 2: Test invalid username (negative test case #1)
    testInvalidUsername(): void {
        // Complete this method based on your manual testing results
        // Follow the same pattern as testValidLogin()
    }

    // Method 3: Test wrong password (negative test case #2)  
    testWrongPassword(): void {
        // Complete this method based on your manual testing results
        // Follow the same pattern as testValidLogin()
    }
}

// Create an instance and run all tests
let loginTests = new SauceDemoLoginTests();
loginTests.testValidLogin();
loginTests.testInvalidUsername();
loginTests.testWrongPassword();

console.log('=== ALL TESTS COMPLETED ===');
```

**Complete the missing methods here:**
```typescript
[Write your complete automation code here]




```

---

## 🏆 Pro Tips for Your Automation Code

- **Be Specific:** Use the actual error messages you saw during manual testing
- **Clear Output:** Make your console.log messages easy to read and understand
- **Realistic Results:** Base your actualResult values on what you actually observed
- **Status Checking:** Use if/else statements to determine PASS/FAIL based on expected vs actual
- **Professional Format:** Make your output look like real test reports

---

## ✅ Submission Checklist

Make sure you've completed all 3 phases before submitting:

- [ ] **Phase 1:** Manual testing results documented
- [ ] **Phase 2:** 3 professional test cases created (1 positive + 2 negative)
- [ ] **Phase 3:** TypeScript automation code written and tested

**Submit this completed markdown file to your instructor.**

---

## 🎯 Learning Objectives Achieved

By completing this assignment, you have:
- ✅ Performed manual testing on a real website
- ✅ Created professional test case documentation
- ✅ Applied TypeScript objects, functions, and classes to real-world testing
- ✅ Understood the complete QA testing workflow
- ✅ Built automation code that simulates real testing frameworks
- ✅ Gained hands-on experience with industry-standard testing practices

**Congratulations! You've completed a full QA automation testing cycle!** 🎉
