import { users } from './users.js'

console.log("added script")

let user = users[0];

user.addFriend("amcneil");
user.addFriend("asanders");
user.addFriend("kwhite");

let friendContainer = document.getElementById("friend-container");
let findContainer = document.getElementById("find-container");

function createBox(user, type) {
    let profileBox = document.createElement("div");
    profileBox.className = "profile-box";

    let username = document.createElement("p");
    username.className = "username";
    username.innerHTML = user._username;
    username.style.display = "none";
    profileBox.appendChild(username);
    

    let profileImg = document.createElement("img");
    profileImg.src = user.picture;
    profileImg.alt = "Profile Picture";
    profileBox.appendChild(profileImg);

    let name = document.createElement("h3");
    name.className = "name";
    name.innerHTML = user.name;
    profileBox.appendChild(name);

    let school = document.createElement("h4");
    school.className = "school";
    school.innerHTML = "School: "
    school.innerHTML += user.school;
    profileBox.appendChild(school);

    let nationality = document.createElement("h4");
    nationality.className = "nation";
    nationality.innerHTML = "Nationality: ";
    nationality.innerHTML += user.nationality;
    profileBox.appendChild(nationality);

    let lang = document.createElement("h4");
    lang.className = "lang";
    lang.innerHTML = "Language(s): "
    lang.innerHTML += user.languages[0];
    if(user.languages.length > 1) {
        lang.innerHTML += ", "
        lang.innerHTML += user.languages[1];
    }
    if(user.languages.length > 2) {
        lang.innerHTML += ", "
        lang.innerHTML += user.languages[2];
    }
    profileBox.appendChild(lang);

    if(type === "friend") {
        let buttonZoom = document.createElement("button");
        buttonZoom.className = "zoom";
        buttonZoom.type = "button";

        let zoomLink = document.createElement("a");
        zoomLink.href = "./chat-zoom.html";
        zoomLink.innerHTML = "Chat on Zoom";

        buttonZoom.appendChild(zoomLink)
        profileBox.appendChild(buttonZoom);

        let buttonPhone = document.createElement("button");
        buttonPhone.className = "phone";
        buttonPhone.type = "button";

        let phoneLink = document.createElement("a");
        phoneLink.href = "./chat-zoom.html";
        phoneLink.innerHTML = "Chat over the Phone";

        buttonPhone.appendChild(phoneLink);
        profileBox.appendChild(buttonPhone)
    } else {
        let buttonAdd = document.createElement("button");
        buttonAdd.className = "find-friend";
        buttonAdd.type = "button";
        buttonAdd.innerHTML = "Add Friend";

        buttonAdd.addEventListener("click", addFriend);
        profileBox.appendChild(buttonAdd);
    }

    return profileBox;
}

function addFriend() {
    this.parentNode.style.display = "none";
    let username = this.parentNode.firstChild.innerHTML;
    console.log("username: " + username)
    let i = 1;
    let found = false;
    let newUser;
    while(found === false && i < users.length) {
        if(username === users[i].username) {
            newUser = users[i];
            found = true;
        }

        i++;
    }
    console.log(i);
    console.log(newUser);
    let newBox = createBox(newUser, "friend");
    friendContainer.appendChild(newBox);
}


let newBox;
let friend = false;

console.log(users[0].friends)

for(let i = 1; i < users.length; i++) {
    console.log(users[i].username);
    friend = false;
    for(let j = 0; j < users[0].friends.length;  j++) {
        if(users[i].username === users[0].friends[j]) {
            friend = true;
        }
    }

    if(friend === true) {
        newBox = createBox(users[i], "friend");
        friendContainer.appendChild(newBox);
    } else {
        newBox = createBox(users[i], "find");
        findContainer.appendChild(newBox);
    }
}

/*
<div class = "profile-box">
    <img src = "resources/images/blank-picture.png">
    <h3 class = "name">Sam Litwin</h3>
    <h4 class = "school">School: Georgetown University</h4>
    <h4 class = "nation">Nationality: American</h4>
    <h4 class = "lang">Languages: English</h4>
    <button class="zoom" type="button">Chat on Zoom</button>
    <button class="phone" type="button">Chat over the Phone</button>
</div>*/