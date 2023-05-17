Feature: Triggering button

Scenario: An element may appaear on a page after heavy JavaScript processing on a client side.
 
Given Navigate to the webpage
And Press the button below
When Wait for data to appear
Then Should appear a label text below 



