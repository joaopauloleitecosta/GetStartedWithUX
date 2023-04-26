/*
let a = false; //Boolean
let b = null; //NULL
let c = 214; //Number
let d = BigInt(); //BigInt
let e = 'Hello World'; //String
let f = Symbol(); //Symbol
let g = {}; //Object
let h = new Object(); //Javascrip provides a special constructor function called Object() to build the object


*/

function add() {
    const dataSet = document.querySelector("#table-data");

    const name      = prompt("Name");
    const lastname  = prompt("Last Name");
    const email     = prompt("Email");

    const tr         = document.createElement("tr");
    const tdName     = document.createElement("td");
    const tdLastName = document.createElement("td");
    const tdEmail    = document.createElement("td");

    tdName.textContent      = name;
    tdLastName.textContent  = lastname;
    tdEmail.textContent     = email;

    tr.appendChild(tdName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdEmail);

    dataSet.appendChild(tr);
}