  import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I have valid credentials', () => {
    cy.fixture('login.json').then((credentials) => {
      cy.wrap(credentials.validCredentials).as('credentials');
    });
  });
  When('I make a POST request to {string}', () => {
    cy.get('@credentials').then((credentials) => {
      cy.request({
        mehtod: 'POST', 
        url: "https://demoqa.com/swagger/#/Account/AccountV1Authorized", 
        credentials}).as('response');
    });
  });
  Then('I should receive a response with status code 200', () => {
    cy.get('@response').its('status').should('equal', 200);
  });
  
  Then('the response should contain a valid access token', () => {
    cy.get('@response').its('body.token').should('be.a', 'string');
  });