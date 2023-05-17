import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("Navigate to the webpage", () => {
  cy.visit("http://www.uitestingplayground.com/clientdelay");
});

When("Press the button below", () => {
  cy.get("#ajaxButton").click();
});

When ("Wait for data to appear", () => {
  cy.wait(16000)
});

Then("Should appear a label text below", () => {
  cy.get(".bg-success")
    .should("contain", "Data calculated on the client side.")
    .and("have.css", "background-color", "rgb(40, 167, 69)");
});

