import { users } from './users.js';
import { clubs } from './clubs.js';

let user = users[0];

user.addClub("French Cinema");
user.addClub("French Mystery Novels");

let yourContainer = document.getElementById("your-container");
let findContainer = document.getElementById("find-container");

/*<div class = "club-box">
                <img src = "resources/images/blank-picture.png" alt = "club-image" />
                <div class = "time club-info">
                    <h4>Time:</h4>
                    <h5>Mondays at 5:00 PM</h5>
                </div>
                <div class = "title club-info">
                    <h4>Title:</h4>
                    <h5>Mystery Novels</h5>
                </div>
                <div class = "lang club-info">
                    <h4>Languages:</h4>
                    <h5>English, French</h5>
                </div>
                <button type="button">Join Club</button>
            </div>*/

function createBox(club, type) {
    let clubBox = document.createElement("div");
    clubBox.className = "club-box";

    let photo = document.createElement('img');
    photo.src = club.photo;
    photo.alt = "Club Image";
    clubBox.appendChild(photo);

    let div1 = document.createElement("div");
    div1.className = "time";

    let timeLabel = document.createElement("h4");
    timeLabel.innerHTML = "Time:";
    div1.appendChild(timeLabel);

    let time = document.createElement("h5");
    time.innerHTML = club.time;
    div1.appendChild(time);

    clubBox.appendChild(div1);

    let div2 = document.createElement("div");
    div2.className = "title";

    let titleLabel = document.createElement("h4");
    titleLabel.innerHTML = "Title:";
    div2.appendChild(titleLabel);

    let title = document.createElement("h5");
    title.innerHTML = club.title;
    div2.appendChild(title);

    clubBox.appendChild(div2);

    let div3 = document.createElement("div");
    div3.className = "lang";

    let langLabel = document.createElement("h4");
    langLabel.innerHTML = "Language(s):";
    div3.appendChild(langLabel);

    let lang = document.createElement("h5");
    lang.innerHTML = club.languages;
    div3.appendChild(lang);

    clubBox.appendChild(div3);

    if(type === "yours") {
        let buttonZoom = document.createElement("button");
        buttonZoom.className = "zoom";
        buttonZoom.type = "button";

        let zoomLink = document.createElement("a");
        zoomLink.href = "./clubs-function.html";
        zoomLink.innerHTML = "Request Zoom Link";

        buttonZoom.appendChild(zoomLink)
        clubBox.appendChild(buttonZoom);
    } else {
        let buttonAdd = document.createElement("button");
        buttonAdd.className = "find";
        buttonAdd.type = "button";
        buttonAdd.innerHTML = "Join Club";

        buttonAdd.addEventListener("click", addClub);
        clubBox.appendChild(buttonAdd);
    }

    return clubBox;
}

function addClub() {
    this.parentNode.style.display = "none";
    console.log(this.parentNode)
    let title = this.parentNode.children[2].children[1].innerHTML;
    console.log("title: " + title)
    let i = 1;
    let found = false;
    let newClub;
    while(found === false && i < clubs.length) {
        if(title === clubs[i].title) {
            newClub = clubs[i];
            found = true;
        }

        i++;
    }
    console.log(i);
    console.log(newClub);
    let newBox = createBox(newClub, "yours");
    yourContainer.appendChild(newBox);
}

let newBox;
let yours = false;

console.log(users[0].clubs)

for(let i = 0; i < clubs.length; i++) {
    console.log(clubs[i].title);
    yours = false;
    for(let j = 0; j < users[0].clubs.length;  j++) {
        if(clubs[i].title === users[0].clubs[j]) {
            yours = true;
        }
    }

    if(yours === true) {
        newBox = createBox(clubs[i], "yours");
        yourContainer.appendChild(newBox);
    } else {
        newBox = createBox(clubs[i], "find");
        findContainer.appendChild(newBox);
    }
}