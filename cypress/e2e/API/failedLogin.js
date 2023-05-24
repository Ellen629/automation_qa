import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I have invalid credentials', () => {
    cy.fixture('login.json').then((credentials) => {
      cy.wrap(credentials.invalidCredentials).as('credentials');
    });
  });
  When('I make a POST request to "/Account/v1/Authorized"', () => {
    cy.get('@credentials').then((credentials) => {
      cy.request({
        mehtod: 'POST', 
        url: "https://demoqa.com/swagger/#/Account/AccountV1Authorized", 
        credentials}).as('response');
    });
  });
  Then('I should receive a response with status code 401', () => {
    cy.get('@response').its('status').should('equal', 401);
  });
  
