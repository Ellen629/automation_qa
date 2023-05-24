import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import { webTable } from "../../pages/webTableLocators";

When("I press Space button in the search field", () => {
    webTable.getSearchInput().type(' ')
})
Then("I should see a message indicating no rows found", () => {
    webTable.getNoRowsFound().should("be.visible")
})