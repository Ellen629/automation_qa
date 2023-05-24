Feature: User list pagination

Background: 
    Given I am on the user list page

  Scenario: Check the content of the pagination section
    When I view the pagination section
    Then I should see the page numbers, navigation buttons and rows dropdown