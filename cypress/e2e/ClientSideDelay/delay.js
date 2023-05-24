import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Given("I am on the page", () => {
//     cy.visit("http://www.uitestingplayground.com/clientdelay");   
// });
// When("I press the button", () => {
//     cy.get('#ajaxButton').click();
// });
// Then("I wait for the data to appear", () => {
//     cy.wait(15000);
//     cy.get('.bg-success').should('be.visible').and('have.css', 'background-color','rgb(40, 167, 69)')
// });

Given('I intercept a {string} request to {string}', (method, url) => {
    cy.intercept(method, url).as('getData')
  })
  
  When('I visit {string}', (url) => {
    cy.visit(url)
  })

  Then('I wait for the request to complete', () => {
    cy.wait('@getData', { timeout: 15000 })

  })
  
  When('the request method should be {string}', (method) => {
    cy.get('@getData').then(({ request }) => {
      expect(request.method).to.eq(method)
    })
  })
  
  Then('the status code should be {int}', (status) => {
    cy.get('@getData').then(({ response }) => {
      expect(response.statusCode).to.eq(status)
    })
  })
  
//   Then('the header content should include {string}', (content) => {
//     cy.get('@getData').then(({ request }) => {
//       expect(request.headers).to.include({
//         'content-type': content
//       })
//     })
//   })
 