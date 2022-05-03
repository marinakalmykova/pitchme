# Pitchme
 
Onboarding e2e test

## Implementation Details

The main goal for this test is to check the main positive case.
Hence, it doesn't include all possible cases.

Several simplifications have been made:
- only checking signup via Email
- all the data added manually (without CV upload)
- negative cases are not included
- connecting to other accounts (like github, behance etc.) is not included
- checks for dashboard functionality is not included since it's another part of the app and should be checked separately.

Some implementation specifics:
- test data is stored in testData.json file and can be changed
- also some of the test data generated via faker tool
- there are two custom commands were created to avoid copy-paste and to follow DRY concept.

## How to run locally
Prerequisites:

NodeJS and GIT should be installed

1. Clone the repo.
2. Install dependencies.
3. Run `npm run cy:run` to run it in headless mode. Result appears in console.
4. Or run 'npm run cy:open' or `cypress open` and click on test name to open browser and watch how the test runs.
5. If test fails (see "Problems") it retries one more time automatically.

## Problems

There is one instability that needs to be tackled.
For some reason step with CV upload is mostly skipped during the autotest run but not in 100% cases. It's not reproducible if you check it manually. 
It might be connected to specifics of app implementation and needs to be further investigated.
For now line with "Add data manually" button click is commented but skipping this step makes the test unstable.

## Future Improvements

1. Most of the selectors based on element id which is not the best practice.
It would be more stable and reliable if elements could have special data attribute.
Cypress experts recommend to use 'data-testid'.

2. This test is pretty long and could be a bit unstable because of that. 
It would be much better to make it as a suite of small integration tests. 
This approach could also help to add other tests for onboarding flow easier. 
