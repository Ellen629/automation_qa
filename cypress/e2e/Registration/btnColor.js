import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import { webTable } from "../../pages/webTableLocators";
import { Table } from "../../utils/webTableData";

Given('I am on the page', () => {   
    cy.visit(Cypress.env('mainUrl'))
})
When('I press the button', () => {
    webTable.getAddBtn().click()
})
Then("The button should have a blue background color", () => {
    webTable.getAddBtn().should("have.css", "background-color", Table.btnColor)
})