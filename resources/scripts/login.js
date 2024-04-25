import { users } from './users.js'

let currentUserModule = { user: "bob" };
let a = 10;
console.log(a);
const username = document.getElementById("username");
const password = document.getElementById("password");
const title = document.getElementById("title")
const block = document.getElementById("login-block");
const errorMsg = document.getElementById("form-message-error")
const submit = document.getElementById("submit-button");

export function getCurrentUser() {
    return currentUserModule.user;
}

function updateCurrentUser(usr) {
    currentUserModule.user = usr;
}



function changeColor() {
    submit.style.backgroundColor = "red";
}

function authenticate() {
    let i = 0;
    let found = false;
    let valid = false;
    while(!found && i < users.length) {
        block.backgroundColor = "red";
        if(users[i].username === username.value) {
            found = true;
            if(users[i].password === password.value) {
                valid = true;
                updateCurrentUser("jim");
                console.log(currentUserModule.user)
                console.log("correct password");
                window.location.replace("home.html");
            }
        }

        i++;
    }

    if(!found) {
        block.style.height = "370px";
        errorMsg.style.display = "block";
    }
}

submit.addEventListener('click', authenticate);
document.addEventListener('keyup', function(event) {
    if(event.code === 'Enter') {
        authenticate();
    }
})

a++;