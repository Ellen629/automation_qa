Feature: Login Functionality

#   Scenario: Successful login
#     Given I have valid credentials
#     When I make a POST request to "/Account/v1/Authorized"
#     Then I should receive a response with status code 200
#     And the response should contain a valid access token

  Scenario: Invalid login
    Given I have invalid credentials
    When I make a POST request to "/Account/v1/Authorized"
    Then I should receive a response with status code 401
