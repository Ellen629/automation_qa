Feature: I am chcekcing the chekcbox page

Scenario: Checking the page
Given I am on demoQa page
When  I click elements
Then The checkbox page should be opened


Scenario: Text box checking
Given I am on demoQa page
When I click elements
Then The checkbox page should be opened
Then Elements should contain following fields
|Fields               |
|Text Box             |
|Check Box            |
|Radio Button         |
|Web Tables           |
|Buttons              |
|Links                |
|Broken Links - Images|
|Upload and Download  |
|Dynamic Properties   |


Scenario: Checking Text Box functonality
Given I am on demoQa page
When I click elements
Then The checkbox page should be opened
When I click Text Box field
And Fill all the fields
And Submit all data
Then All the same filled data should appear in the buttom