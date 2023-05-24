import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import { webTable } from "../../pages/webTableLocators";

When("I view the pagination section", () => {
    webTable.getPagination()
})
Then("I should see the page numbers, navigation buttons and rows dropdown", () => {
    webTable.getPrevBtn().should("be.visible")
    webTable.getNextBtn().should("be.visible")
    webTable.getPages().should("be.visible")
    webTable.getRowsDropdown().should("be.visible")
})