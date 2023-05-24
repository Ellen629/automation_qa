import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import { webTable } from "../../pages/webTableLocators";
import {Table, validUserData} from "../../utils/webTableData"
   
const age = [];
When('I find the last user in the list', () => {
    webTable.getLastUser()
})
When('I click on the Edit button of the last added column', () => {
    webTable.getEditBtn().click()
})
When('I change the Age', () => {
    webTable.getAge().clear()
    webTable.getAge().type('23').invoke('val').then((text) => {
        age.push(text);
    })
    webTable.getSubmitBtn().click()
})
Then('The age should be displayed with modified data', () => {
    webTable.getLastUser().should('contain', parseInt(age))
})

