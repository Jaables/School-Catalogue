class Media {
  constructor(title) {
    this._title = title,
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title(){
    return this._title;
  }

  get isCheckedOut(){
    return this._isCheckedOut;
  }

  get ratings(){
    return this._ratings;
  }

  set isCheckedOut(value){
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus(){
    this.isCheckedOut = !this.isCheckedOut
  }

  getAverageRating() {
    let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);

    return ratingsSum / this.ratings.length;
  }

  addRating(newRating) {
    this.ratings.push(newRating);
  }

}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages(){
    return this._pages;
  }
}

  class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime(){
    return this._runTime;
  }


}
// testing out the Book class
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);


historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

// Testing out the Movie class
const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log("Is Speed checked out?: " + speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log("Speed average rating: " + speed.getAverageRating());


