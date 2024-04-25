class User {
    constructor(username, password) {
        this._username = username;
        this._password = password;
        this._picture;
        this._name;
        this._school;
        this._year;
        this._nationality;
        this._languages;
        this._field;
        this._interests;
        this._friends = [];
        this._clubs = [];
    }

    get username() {
        return this._username;
    }

    set username(username) {
        this._username = username;
    }

    get password() {
        return this._password;
    }

    set password(password) {
        this._password = password;
    }

    get picture() {
        return this._picture;
    }

    set picture(picture) {
        this._picture = picture;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get school() {
        return this._school;
    }

    set school(school) {
        this._school = school;
    }

    get year() {
        return this._year;
    } 

    set year(year) {
        this._year = year;
    }

    get nationality() {
        return this._nationality;
    }

    set nationality(nationality) {
        this._nationality = nationality;
    }

    get languages() {
        return this._languages;
    }

    set languages(languages) {
        this._languages = languages;
    }

    get field() {
        return this._field;
    }

    set field(field) {
        this._field = field;
    }

    get interests() {
        return this._interests;
    }

    set interests(interests) {
        this._interests = interests;
    }

    get friends() {
        return this._friends;
    }

    set friends(friends) {
        this._friends = friends;
    }

    get clubs() {
        return this._clubs;
    }

    set clubs(clubs) {
        this._clubs = clubs;
    }

    createProfile(picture, first, last, school, year, nationality, languages, field, interests) {
        this._picture = picture;
        this._name = first + " " + last;
        this._school = school;
        this._year = year;
        this._nationality = nationality;
        this._languages = languages;
        this._field = field;
        this._interests = interests;
    }

    addFriend(username) {
        this._friends.push(username);
    }

    addClub(name) {
        this._clubs.push(name);
    }
}

const user1 = new User("jjones", "password");
user1.createProfile("/resources/images/profile-pictures/user1.jpg", "John", "Jones", "Georgetown University", "2nd", "American", ["English"], "Anthropology", ["Soccer", "Hockey"]);

const user2 = new User("tsmith", "password");
user2.createProfile("/resources/images/profile-pictures/user2.jpg", "Tracey", "Smith", "Sciences Po", "4th", "French", ["Spanish", "French"], "Biology", ["Fashion", "Film"]);

const user3 = new User("amcneil", "password");
user3.createProfile("/resources/images/profile-pictures/user3.jpg", "Anne", "McNeil", "Sciences Po", "1st", "Australian", ["English", "French"], "Computer Science", ["Soccer", "Cooking"]);

const user4 = new User("gcarpenter", "password");
user4.createProfile("/resources/images/profile-pictures/user4.jpg", "Gillian", "Carpenter", "Sciences Po", "1st", "American", ["English", "Chinese"], "Political Science", ["Soccer", "Field Hockey"]);

const user5 = new User("asanders", "password");
user5.createProfile("/resources/images/profile-pictures/user5.jpg", "Amy", "Sanders", "Sciences Po", "3rd", "British", ["English", "Arabic"], "Math", ["Cooking", "Hockey", "Debate"]);

const user6 = new User("kwhite", "password");
user6.createProfile("/resources/images/profile-pictures/user6.jpg", "Kevin", "White", "Sciences Po", "4th", "American", ["English", "Spanish", "French"], "Food Science", ["Baseball"]);

const user7 = new User("mbrown", "password");
user7.createProfile("/resources/images/profile-pictures/user7.jpg", "Mary", "Brown", "Sciences Po", "3rd", "Australian", ["English", "Swahili"], "Exercise Science", ["Football", "Sumo Wrestling"]);

const user8 = new User("asmith", "password");
user8.createProfile("/resources/images/profile-pictures/user8.jpg", "Andrew", "Smith", "Sciences Po", "4th", "Chinese", ["Chinese"], "International Relations", ["Soccer", "Hockey", "Robotics"]);

const user9 = new User("jfrancis", "password");
user9.createProfile("/resources/images/profile-pictures/user9.jpg", "James", "Francis", "Sciences Po", "1st", "French", ["French", "Spanish", "English"], "Business", ["Eating"]);

const user10 = new User("kjones", "password");
user10.createProfile("/resources/images/profile-pictures/user10.jpg", "Karen", "Jones", "Sciences Po", "2nd", "Argentinian", ["Spanish"], "Nursing", ["Soccer"]);

export let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];