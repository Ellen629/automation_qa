# Feature: Wait for label text to appear

#   Scenario: Click on the button for Client side logic 
#     Given I am on the page
#     When I press the button
#     Then  I wait for the data to appear

# Feature: Test client-side delay case
#   I want to verify the request method, status code, and header content of a delayed client-side request
#   So that I can ensure the correct behavior of the application

#   Scenario: Verify client-side delay case
#     Given I intercept a "GET" request to "**/api/data"
#     When I visit "http://www.uitestingplayground.com/clientdelay"
#     Then I wait for the request to complete
#     And the request method should be "GET"
#
     And the status code should be 200
    # Then the header content should include "application/json"
