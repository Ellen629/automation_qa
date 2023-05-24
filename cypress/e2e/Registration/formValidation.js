import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import { webTable } from "../../pages/webTableLocators";
import { Table } from "../../utils/webTableData";

Then("The fields  borders should be illustrated", () => {
    webTable.getName().should("have.css", "border-color", Table.validadatedBorders)
    webTable.getSurname().should("have.css", "border-color", Table.validadatedBorders)
    webTable.getEmail().should("have.css", "border-color", Table.validadatedBorders)
    webTable.getAge().should("have.css", "border-color", Table.validadatedBorders)
    webTable.getSalary().should("have.css", "border-color", Table.validadatedBorders)
    webTable.getDepartment().should("have.css", "border-color", Table.validadatedBorders)
})