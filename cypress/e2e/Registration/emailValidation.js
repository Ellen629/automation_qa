import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import { webTable } from "../../pages/webTableLocators";
import {Table, validUserData, invalidData} from "../../utils/webTableData"

When("I fill all fields except email input", () => {
    webTable.getName().type(validUserData.name)
    webTable.getSurname().type(validUserData.surname)
    webTable.getAge().type(validUserData.age)
    webTable.getSalary().type(validUserData.salary)
    webTable.getDepartment().type(validUserData.department)
})
When("I fill the email input with wrong format", () => {
    webTable.getEmail().type(invalidData.email)
})
Then("The email field borders should be illustrated", () => {
    webTable.getEmail().should("have.css", "border-color", Table.validadatedBorders)
})