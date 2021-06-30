const { ObjectID } = require("mongodb");
const mongoCollections = require("../config/mongoCollections");
const books = mongoCollections.books;

const spaceRegex = /^ +$/gi;
let pattern = /(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])\/(19|20)\d{2}/g

function notProvided(v, keyword) {
  if (!v) throw `No ${keyword} was provided`;
}

function nEStringProvided(v, keyword) {
  if (!v) throw `No ${keyword} was provided`;
  if (typeof v != "string") throw `${keyword} is not a string`;
  if (spaceRegex.test(v)) throw `${keyword} is just an empty string`;
}

function idProvided(id) {
  if (typeof id !== "string") id = id.toString();
  nEStringProvided(id, "Id for the movie collection");
  let parsedId = ObjectID(id);
  return parsedId;
}

function errorHandling(title, author, genre, datePublished, summary, reviews) {
  nEStringProvided(title, "title");
  nEStringProvided(summary, "summary");
  nEStringProvided(datePublished, "summary");
  // if (pattern.test(datePublished)) throw `${datePublished} is not a valid date format`
  notProvided(author, "cast");
  notProvided(genre, "info");
  notProvided(reviews, "info");
  if (!Array.isArray(genre)) throw `${genre} is not an array`;
  if (genre.length === 0) throw `${genre} is an empty array`;
  for (element in genre) {
    nEStringProvided(element, "An element in the genre array");
  }
  if (!Array.isArray(reviews)) throw `${reviews} is not an array`;
  for (element in reviews) {
    nEStringProvided(element, "An element in the reviews array");
  }
  if (typeof author !== "object" && author === null)
    throw `${author} is not an object or null`;
  nEStringProvided(author.authorFirstName, "author first name");
  nEStringProvided(author.authorLastName, "author last name");
}

module.exports = {
  async create(title, author, genre, datePublished, summary, reviews) {
    //   Error Handling
    errorHandling(title, author, genre, datePublished, summary, reviews);

    //   Get the movies collection
    const booksCollection = await books();

    // Initialize the new movie Object
    let newBook = {
      title: title,
      author: author,
      genre: genre,
      datePublished : datePublished,
      summary: summary,
      reviews: reviews,
    };

    // Insert new movie into movieCollection
    const insertInfo = await booksCollection.insertOne(newBook);
    // Check if properly inserted
    if (insertInfo.insertedCount === 0) throw "Could not add book";

    // Get ID and return the just added movie object
    const bookID = insertInfo.insertedId;

    const addedBook = await this.get(bookID);
    // addedBook._id = JSON.stringify(addedBook._id)
    addedBook._id = addedBook._id.toString()
    // console.log("Creating book document")
    // console.log(addedBook)

    // const movie = await this.get(movieID);
    return addedBook;
  },
  async getAll() {
    const booksCollection = await books();
    const allbooks = await booksCollection.find({}).toArray();
    for (element in allbooks) {
      allbooks[element]._id = allbooks[element]._id.toString()
    }
    return allbooks;
  },
  async get(id) {
    parsedId = idProvided(id);
    const booksCollection = await books();
    const book = await booksCollection.findOne({ _id: parsedId });
    if (book === null) throw `Could not find a book with id: ${id}`;
    // book._id = book._id.toString()
    // book._id = book._id.toString()
    return book;
  },
  async remove(id) {
    parsedId = idProvided(id);
    const book = await this.get(id);
    const title = book.title;
    const booksCollection = await books();

    const deletionInfo = await booksCollection.removeOne({ _id: parsedId });
    if (deletionInfo.deletedCount === 0)
      throw `Could not remove a book with id: ${id}`;
    return `${title} has been successfully deleted`;
  },
  async update(id, updatedBook) {
    parsedId = idProvided(id);
    const book = await this.get(id);
    const booksCollection = await books();
    // console.log("GEtting previous book")
    // console.log(book)
    // console.log("Parameter for updated book")
    // console.log(updatedBook)
    if (updatedBook.title){
      nEStringProvided(updatedBook.title, "title");
      book.title = updatedBook.title
    }
    if (updatedBook.title){
      nEStringProvided(updatedBook.title, "title");
      book.title = updatedBook.title
    }
    if (updatedBook.author) {
      notProvided(updatedBook.author, "cast");
      if (typeof updatedBook.author !== "object" && updatedBook.author === null)
        throw `${updatedBook.author} is not an object or null`;
      nEStringProvided(updatedBook.author.authorFirstName, "director property in info");
      nEStringProvided(updatedBook.author.authorLastName, "year released property in info");
      book.author = updatedBook.author
    } 
    if (updatedBook.genre){
      notProvided(updatedBook.genre, "info");
      if (!Array.isArray(updatedBook.genre)) throw `${updatedBook.genre} is not an array`;
      if (updatedBook.genre.length === 0) throw `${updatedBook.genre} is an empty array`;
      for (element in updatedBook.genre) {
        nEStringProvided(element, "An element in the genre array");
      }
      book.genre = updatedBook.genre
    }
    if (updatedBook.datePublished) {
      nEStringProvided(updatedBook.datePublished, "summary");
      // if (!pattern.test(updatedBook.datePublished)) throw `${updatedBook.datePublished} is not a valid date format`
      book.datePublished = updatedBook.datePublished
    }
    if (updatedBook.summary) {
      nEStringProvided(updatedBook.summary, "summary");
      book.summary = updatedBook.summary

    } 
    if (updatedBook.reviews) {

      notProvided(updatedBook.reviews, "info");
      if (!Array.isArray(updatedBook.reviews)) throw `${updatedBook.reviews} is not an array`;
      for (element in updatedBook.reviews) {
          nEStringProvided(updatedBook.reviews[element], "An element in the reviews array");
      }
      book.reviews = updatedBook.reviews
    }
    // console.log("updated original version of the book but still need to update database")
    // console.log(book) 
    const updatedInfo = await booksCollection.updateOne(
      { _id: parsedId },
      { $set: book }
    );
    if (updatedInfo.modifiedCount === 0)
      throw `Could not update a book with id: ${id}`;

    const revisedBook = await this.get(id);
    revisedBook._id = revisedBook._id.toString()

    return revisedBook;
  },
};
