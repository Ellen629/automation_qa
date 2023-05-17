import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import { webTable } from "../../pages/webTableLocators";

Then("The fields borders should have {string} color", (color) => {
    webTable.getName().should("have.css", "border-color", color)
    webTable.getSurname().should("have.css", "border-color", color)
    webTable.getEmail().should("have.css", "border-color", color)
    webTable.getAge().should("have.css", "border-color", color)
    webTable.getSalary().should("have.css", "border-color", color)
    webTable.getDepartment().should("have.css", "border-color", color)
})