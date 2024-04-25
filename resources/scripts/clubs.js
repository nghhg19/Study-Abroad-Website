class Club {
    constructor(photo, time, title, languages) {
        this._photo = photo;
        this._time = time;
        this._title = title;
        this._languages = languages;
    }

    get photo() {
        return this._photo;
    }

    get time() {
        return this._time;
    }

    get title() {
        return this._title;
    }

    get languages() {
        return this._languages;
    }
}

let club1 = new Club("resources/images/club-pictures/club1.jpg", "Mondays at 5:00 PM", "French Cinema", "English, French")
let club2 = new Club("resources/images/club-pictures/club2.jpg", "Wednesdays at 6:00 PM", "International Rugby", "English")
let club3 = new Club("resources/images/club-pictures/club3.jpg", "Thursdays at 7:00 AM", "French Mystery Novels", "French")
let club4 = new Club("resources/images/club-pictures/club4.jpg", "Mondays at 8:00 PM", "French-American Literatue", "English, French")
let club5 = new Club("resources/images/club-pictures/club5.jpg", "Tuesdays at 4:00 PM", "French Documentaries", "English")
let club6 = new Club("resources/images/club-pictures/club6.jpg", "Fridays at 7:00 PM", "French Cuisine", "French")

export let clubs = [club1,club2,club3,club4,club5,club6]