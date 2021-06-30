const { ObjectID } = require("mongodb");
const mongoCollections = require("../config/mongoCollections");
const movies = mongoCollections.movies;
const spaceRegex = /^ +$/gi;
const d = new Date();

function notProvided(v, keyword) {
  if (!v) throw `No ${keyword} was provided`;
}

function stringProvided(v, keyword) {
  if (!v) throw `No ${keyword} was provided`;
  if (typeof v != "string") throw `${keyword} is not a string`;
}

function nEStringProvided(v, keyword) {
  if (typeof v != "string") throw `${keyword} is not a string`;
  if (spaceRegex.test(v)) throw `${keyword} is just an empty string`;
}

function idProvided(id) {
  if (typeof id !== "string") id = id.toString();
  notProvided(id, "Id for the movie collection");
  nEStringProvided(id, "Id for the movie collection");
  let parsedId = ObjectID(id);
  return parsedId;
}

function errorHandling(title, plot, rating, runtime, genre, cast, info) {
  stringProvided(title, "title");
  stringProvided(plot, "plot");
  stringProvided(rating, "rating");
  stringProvided(runtime, "runtime");
  stringProvided(genre, "genre");
  notProvided(cast, "cast");
  notProvided(info, "info");
  if (!Array.isArray(cast)) throw `${cast} is not an array`;
  if (cast.length === 0) throw `${cast} is an empty array`;
  for (element in cast) {
    nEStringProvided(element, "An element in the array");
  }
  if (typeof info !== "object" && info === null)
    throw `${info} is not an object or null`;
  notProvided(info.director, "director property in info");
  notProvided(info.yearReleased, "year released property in info");
  nEStringProvided(info.director, "Director property in info");
  if (
    typeof info.yearReleased != "number" ||
    !Number.isInteger(info.yearReleased)
  )
    throw `${info.yearReleased} is not a number or an integer`;
  if (info.yearReleased < 999 || info.yearReleased > 9999)
    throw `${info.yearReleased} is not a 4 digit number`;
  if (info.yearReleased < 1930 || info.yearReleased > d.getFullYear() + 5)
    throw `${info.yearReleased} is not a valid year`;
}

module.exports = {
  async create(title, plot, rating, runtime, genre, cast, info) {
    //   Error Handling
    errorHandling(title, plot, rating, runtime, genre, cast, info);

    //   Get the movies collection
    const movieCollection = await movies();

    // Initialize the new movie Object
    let newMovie = {
      title: title,
      plot: plot,
      rating: rating,
      runtime: runtime,
      genre: genre,
      cast: cast,
      info: info,
    };

    // Insert new movie into movieCollection
    const insertInfo = await movieCollection.insertOne(newMovie);
    // Check if properly inserted
    if (insertInfo.insertedCount === 0) throw "Could not add movie";

    // Get ID and return the just added movie object
    const movieID = insertInfo.insertedId;

    const addedMovie = await this.get(movieID);
    addedMovie._id = addedMovie._id.toString();

    return addedMovie;
  },
  async getAll() {
    const movieCollection = await movies();
    const allMovies = await movieCollection.find({}).toArray();
    allMovies.forEach( (movie) => {
      movie._id = movie._id.toString();
    })
    return allMovies;
  },
  async get(id) {
    parsedId = idProvided(id);
    const movieCollection = await movies();
    const movie = await movieCollection.findOne({ _id: parsedId });
    if (movie === null) throw `Could not find a movie with id: ${id}`;
    movie._id = movie._id.toString();
    return movie;
  },
  async remove(id) {
    const movie = await this.get(id);
    const title = movie.title;
    movie._id = ObjectID(movie._id);
    const movieCollection = await movies();

    const deletionInfo = await movieCollection.removeOne({ _id: movie._id });
    if (deletionInfo.deletedCount === 0)
      throw `Could not remove a movie with id: ${id}`;
    return `${title} has been successfully deleted`;
  },
  async rename(id, newTitle) {
    stringProvided(newTitle, "newTitle");
    const movie = await this.get(id);
    movie.title = newTitle;
    movie._id = ObjectID(movie._id);
    const movieCollection = await movies();
    const updatedInfo = await movieCollection.updateOne(
      { _id: movie._id },
      { $set: {
        title: newTitle
      }}
    );
    if (updatedInfo.modifiedCount === 0)
      throw `Could not update a movie with id: ${id}`;

    const updatedMovie = await this.get(id);
    updatedMovie._id = updatedMovie._id.toString();

    return updatedMovie;
  },
};
