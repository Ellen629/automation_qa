import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the page", () => {
  cy.visit("https://demoqa.com/webtables");
});

When("I Press the button", () => {
  cy.get('#addNewRecordButton').click();
  });

 Then ("Should appear a popup window", () => {
    cy.get('.modal-header')
 });


