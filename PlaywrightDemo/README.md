# Prerequisites
The following software is required:

nodejs : Download and Install Node JS from:
 `https://nodejs.org/en/download/`

# Installation
* Clone the repo using below URL:
 `https://github.com/Olesia85/Playwright_Typescript_Tests.git`

* Navigate to folder and install npm packages using:
 `npm install`

* Install new browsers:
 `npx playwright install`

# Usage
Test Cases are present in  `"tests"` folder.
* For executing tests in terminal in 3 browsersexecute the below command:
`npx playwright test` 

* For executing tests on Chrome browser execute the below command, you can change the browser for execution e.g. if you want to run test cases on Firefox, you can change --project=Firefox :
`npx playwright test  --project=Chromium` 

* For executing smoke tests on Firefox browser execute the below command:
`npx playwright test --grep @Smoke --project=Firefox`

* For executing single test on Chrome browser execute the below command:
`npx playwright test SubscriptionPreferences.test.ts --project=Chromium`

* To use UI mode in Playwright execute the below command:
`npx playwright test --ui`

* To check report execute the below command:
`npx playwright show-report`
