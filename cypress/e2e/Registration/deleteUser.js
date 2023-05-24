import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import { webTable } from "../../pages/webTableLocators";

When("I click on the Delete button of the last added column", () => {
    webTable.getDeleteBtn().click()
})
Then("The user should be removed from the list", () => {
    webTable.getLastUser().should("not.exist")
})