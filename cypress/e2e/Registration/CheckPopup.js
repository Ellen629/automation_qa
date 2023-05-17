import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import { webTable } from "../../pages/webTableLocators";

Then('The popup should contain the following labels', (datatable) => {
    datatable.hashes().forEach((row) => {
    webTable.getModal().should('contain',row.labels)
    })
})