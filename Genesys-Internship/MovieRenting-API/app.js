function ParentMovieRentAPI(title, director, productionDate) {
  this.title = title;
  this.director = director;
  this.productionDate = productionDate;
}

let movies = [];

function childMovieRentAPI(isWatch, movie = {}) {
  this.isWatch = isWatch;
  this.movies = movies.push(movie);
}

childMovieRentAPI.prototype = Object.create(ParentMovieRentAPI.prototype);

ParentMovieRentAPI.prototype.checkMovieRelease = function () {
  console.log(
    `The movie name is ${this.title} and was released in ${this.productionDate}`
  );
};

childMovieRentAPI.prototype.addMovieRent = function () {
  console.log(
    `The child is inheriting the properties of the parent contructor, which implies the movie has been watched ${this.isWatch}`
  );
};

const movie1 = new ParentMovieRentAPI(
  "Blacklist",
  "Raymond Reddington",
  2020,
  true
);
console.log(movie1);
console.log(movie1.checkMovieRelease());

const movie2 = new childMovieRentAPI(true, {
  title: "sistas",
  director: "Black American",
  productionDate: 2020,
});
console.log(movie2.movies);
// console.log(movie2.addMovieRent());
