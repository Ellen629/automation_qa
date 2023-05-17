import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import { webTable } from "../../pages/webTableLocators";
import {Table, validUserData, invalidData} from "../../utils/webTableData"

When("I fill all fields except age input", () => {
    webTable.getName().type(validUserData.name)
    webTable.getSurname().type(validUserData.surname)
    webTable.getEmail().type(validUserData.email)
    webTable.getSalary().type(validUserData.salary)
    webTable.getDepartment().type(validUserData.department)
})
When("I fill the age input with letters and symbols", () => {
    webTable.getAge().type(invalidData.age)
})
Then("The age field borders should have {string} color", (color) => {
    webTable.getAge().should("have.css", "border-color", color)
})