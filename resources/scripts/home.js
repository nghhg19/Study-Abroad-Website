import { users } from './users.js'

let user = users[0];

let profile = document.getElementById("profile");
let name = document.getElementById("name");
let school = document.getElementById("school");
let year = document.getElementById("year");
let nationality = document.getElementById("nationality");
let languages = document.getElementById("languages");
let field = document.getElementById("field");
let interests = document.getElementById("interests");

profile.src = user.picture;
name.innerHTML += user.name;
school.innerHTML += user.school;
year.innerHTML += user.year;
nationality.innerHTML += user.nationality;
languages.innerHTML += user.languages[0];
if(user.languages.length > 1) {
    languages.innerHTML += ", ";
    languages.innerHTML += user.languages[1];
}
if(user.languages.length > 2) {
    languages.innerHTML += ", ";
    languages.innerHTML += user.languages[2];
}
field.innerHTML += user.field;
interests.innerHTML += user.interests[0];
if(user.interests.length > 1) {
    interests.innerHTML += ", ";
    interests.innerHTML += user.interests[1];
}
if(user.interests.length > 2) {
    interests.innerHTML += ", ";
    interests.innerHTML += user.interests[2];
}


//console.log(user);