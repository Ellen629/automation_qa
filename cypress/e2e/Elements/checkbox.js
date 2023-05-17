import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on demoQa page", ()=>{
    cy.visit("https://demoqa.com/");
 })
 When("I click elements", ()=>{
     cy.get(':nth-child(1) > :nth-child(1) > .card-body').click();
 })
 Then("The checkbox page should be opened", ()=> {
    cy.visit('https://demoqa.com/elements').should('exist');
    cy.get('.playgound-header').should('exist').contains('Elements');
 });

 Then('Elements should contain following fields', (datatable)=>{
    datatable.hashes().forEach((row) => {
        cy.get('.menu-list').should('contain',row.Fields)
        })
});

const data = []

 When("I click Text Box field", () => {
    cy.get(":nth-child(1) > .element-list > .menu-list > #item-0").click();
  });
  When("Fill all the fields", () => {
    cy.get("#userName")
      .type("Anna Amirkhanyan")
      .invoke("val")
      .then((text) => {
        data.push(text);
      });
      cy.get("#userEmail")
      .type("annushka@gmail.com")
      .invoke("val")
      .then((text) => {
        data.push(text);
      });
    cy.get("#currentAddress")
      .type("Kievyan 8")
      .invoke("val")
      .then((text) => {
        data.push(text);
      });
      cy.get("#permanentAddress")
      .type("Partigiani 10")
      .invoke("val")
      .then((text) => {
        data.push(text);
      });
  })
    When("Submit all data", () => {
      cy.get("#submit").click();
    });
  
Then ('All the same filled data should appear in the buttom', ()=>{ 
    let border = cy.get('.border')
    let str = JSON.stringify(border)
     cy.log(str).should('contains', data.toString())
});
     

   