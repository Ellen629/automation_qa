import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import { webTable } from "../../pages/webTableLocators";
import {Table, validUserData} from "../../utils/webTableData"
   
const newUser = [];
When('I fill all fields', () =>{
    webTable.getName()
        .type("Ellen")
        .invoke('val')
        .then((text) => {
        newUser.push(text)
    });
    webTable.getSurname()
        .type("Sargsyan")
        .invoke('val')
        .then((text) => {
        newUser.push(text)
    });;
    webTable.getEmail()
        .type("test@gmail.com")
        .invoke('val')
        .then((text) => {
        newUser.push(text)
    });;
    webTable.getAge()
        .type("32")
        .invoke('val')
        .then((text) => {
        newUser.push(text)
    });;
    webTable.getSalary()
        .type("500000")
        .invoke('val')
        .then((text) => {
        newUser.push(text)
    });;
    webTable.getDepartment()
        .type("Auction")
        .invoke('val')
        .then((text) => {
        newUser.push(text)
    });
 })
 When('I click on the Submit button', () => {
     webTable.getSubmitBtn().click();
 })
 Then('A column with appropriate data should be added in the table', () => {
    webTable.getLastUser().should('contain', newUser[0])
 })