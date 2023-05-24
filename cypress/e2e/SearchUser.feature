Feature: Search user via different parameters

Background:
   Given I am on the user list page

Scenario: Search for a user
  When I type "ie" in the search input
  Then I should see the user list filtered with "ie"

Scenario: No Rows Found
    When I press Space button in the search field
    Then I should see a message indicating no rows found