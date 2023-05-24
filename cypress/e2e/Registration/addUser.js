import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import { webTable } from "../../pages/webTableLocators";
import {Table, validUserData} from "../../utils/webTableData"
   
const newUser = [];
When('I fill all fields', () =>{
    webTable.getName()
        .type(validUserData.name)
        .invoke('val')
        .then((text) => {
        newUser.push(text)
    });
    webTable.getSurname()
        .type(validUserData.surname)
        .invoke('val')
        .then((text) => {
        newUser.push(text)
    });;
    webTable.getEmail()
        .type(validUserData.email)
        .invoke('val')
        .then((text) => {
        newUser.push(text)
    });;
    webTable.getAge()
        .type(validUserData.age)
        .invoke('val')
        .then((text) => {
        newUser.push(text)
    });;
    webTable.getSalary()
        .type(validUserData.salary)
        .invoke('val')
        .then((text) => {
        newUser.push(text)
    });;
    webTable.getDepartment()
        .type(validUserData.department)
        .invoke('val')
        .then((text) => {
        newUser.push(text)
    });
 })
 When('I click on the Submit button', () => {
     webTable.getSubmitBtn().click();
 })
 Then('A column with appropriate data should be added in the table', () => {
    webTable.getLastUser()
        .invoke('val')
        .then((text) => {
            expect(text).to.match(new RegExp(newUser.toString()))
        })
 })