import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import { webTable } from "../../pages/webTableLocators";
import { Table, defaultUser } from "../../utils/webTableData";

Given('I am on the user list page', () => {
    cy.visit(Cypress.env('mainUrl'))
  });
  
When('I type {string} in the search input', (searchTerm) => {
    webTable.getSearchInput().type(searchTerm);
  });
  
Then('I should see the user list filtered with {string}', (searchTerm) => {
    webTable.getUsersTable().each((userListItem) => {
      cy.wrap(userListItem)
        .invoke('text')
        .then((text) => {
          const regex = new RegExp(`.*${searchTerm.split('').join('.*')}.*`, 'i');
          expect(text).to.match(regex);
        });
    });
  });
  
  
  
  
  