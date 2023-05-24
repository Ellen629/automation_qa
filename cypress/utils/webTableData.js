const Table = {
    btnColor: "rgb(0, 123, 255)",
    validadatedBorders: "rgb(220, 53, 69)"
}

const defaultUser = {
    name: "Kierra",
    surname: "Gentry",
    email: "kierra@example.com",
    age: "29",
    salary: "2000",
    department: "Legal"
}

const validUserData ={
    name: "Jack",
    surname: "Johnson",
    email: "test@gmail.com",
    age: "25",
    salary: "400000",
    department: "development"
}

const invalidData ={
    email: "testgmail.com",
    age: "letters"
}

export {Table, validUserData, invalidData, defaultUser}