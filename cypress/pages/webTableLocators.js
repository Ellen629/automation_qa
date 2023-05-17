class WebTable {
    getAddBtn(){
      return cy.get('#addNewRecordButton')
    }
    getModal(){
        return cy.get('.modal-body')
    }
    getName(){
        return cy.get('#firstName')
    }
    getSurname(){
        return cy.get('#lastName')
    }
    getEmail(){
        return cy.get('#userEmail')
    }
    getAge(){
        return cy.get('#age')
    }
    getSalary(){
        return cy.get('#salary')
    }
    getDepartment(){
        return cy.get('#department')
    }
    getSubmitBtn(){
        return cy.get('#submit')
    }
    getUsersTable(){
        return cy.get('.col-md-6')
    }
    getEditBtn(){
        return cy.get('#edit-record-4')
    }
    getLastUser(){
        return cy.get(".rt-tr-group").eq(3)
    }
    getDeleteBtn(){
        return cy.get('#delete-record-4')
    }
}

export const  webTable = new WebTable();