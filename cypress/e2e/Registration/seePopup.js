import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import { webTable } from "../../pages/webTableLocators";
import { Table } from "../../utils/webTableData";

Then('A popup should  be opened', ()=> {    
    webTable.getModal().should('be.visible');
})