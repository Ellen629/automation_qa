Feature: Add user data 

Background: 
    Given I am on the page
    When I press the button
    And  A popup should  be opened


  Scenario: Check the Add button background-color
    When I press the button
    Then The button should have a blue background color

  Scenario: Click on the Add button 
    Then A popup should  be opened


  Scenario: Check the popup content 
    Then The popup should contain the following labels
    |labels    |
    |First Name| 
    |Last Name | 
    |Email     | 
    |Age       |
    |Salary    |
    |Department|

  Scenario: Check the Registration form and add user
    When I fill all fields
    When I click on the Submit button
    Then A column with appropriate data should be added in the table

  Scenario: Check the Edit user data functionality
    When I fill all fields
    When I click on the Submit button
    When I find the last user in the list
    When I click on the Edit button of the last added column
    When I change the Age
    Then The age should be displayed with modified data 

  Scenario: Check the Delete user  functionality
    When I fill all fields
    When I click on the Submit button
    When I find the last user in the list
    When I click on the Delete button of the last added column
    Then The user should be removed from the list

  Scenario: Check the empty form functionality
    When I click on the Submit button
    Then The fields  borders should be illustrated

  Scenario: Check the wrong email format functionality
    When I fill all fields except email input
    When I fill the email input with wrong format
    When I click on the Submit button
    Then The email field borders should be illustrated

  Scenario: Check that the Age field can accept only numbers
    When I fill all fields except age input
    When I fill the age input with letters and symbols
    When I click on the Submit button
    Then The age field borders should be illustrated