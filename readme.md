
Installation steps
1.  Install latest nodeJS 
    https://nodejs.org/en/download/
2.  Install Visual studio code
    https://code.visualstudio.com/Download
3.  Open VS code 
4.  Clone repo from  https://github.com/sumeet6181/PlaywrightCucumberAssignment.git
4.  Open terminal and Run command "npm install"
5.  Then execute command "npx playwright install"

TO RUN Tests:- npm run test:e2e 
TO generate Report:- npm run report

GitHUB
Public Repos :-  https://github.com/sumeet6181/PlaywrightCucumberAssignment.git
GitHUB action will execute suite on every PUSH, and publish a report


Framework:- 
Page Folder:-  is containing page objects and pageObject file
Report Folder: is containing a generated reports
step-definition folder:- is containing Hooks and step definitions 
Tests/feature folder:- is containing all feature files
Cucumber.json file:- is for glue
html-reporter file:- is for html report design


