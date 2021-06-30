const { ObjectID } = require("mongodb");
const mongoCollections = require("../config/mongoCollections");
const reviewsCol = mongoCollections.reviews;
const bookMethods = require("./books");

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

function errorHandling(title, reviewer, bookBeingReviewed, rating, dateOfReview, review) {
  nEStringProvided(title, "title");
  nEStringProvided(reviewer, "reviewer");
  nEStringProvided(bookBeingReviewed.toString(), "bookBeingReviewed");
  nEStringProvided(dateOfReview, "dateOfReview");
  nEStringProvided(review, "review");
  if (!rating) throw `No ${rating} was provided`
  if (typeof rating != "number") throw `${rating} is not a number`
  // if (!pattern.test(dateOfReview)) throw `${dateOfReview} is not a valid date format`
}

module.exports = {
  async create(title, reviewer, bookBeingReviewed, rating, dateOfReview, review) {
    //   Error Handling
    errorHandling(title, reviewer, bookBeingReviewed, rating, dateOfReview, review);

    //   Get the movies collection
    const reviewsCollection = await reviewsCol();

    // Initialize the new movie Object
    let newReview = {
      title: title,
      reviewer: reviewer,
      bookBeingReviewed: bookBeingReviewed,
      rating : rating,
      dateOfReview: dateOfReview,
      review: review,
    };

    // Insert new review into reviewsCollection
    const insertInfo = await reviewsCollection.insertOne(newReview);
    // Check if properly inserted
    if (insertInfo.insertedCount === 0) throw "Could not add review";

    // Get ID and return the just added movie object
    const reviewID = insertInfo.insertedId;

    const addedReview = await this.get(reviewID);
    addedReview._id = addedReview._id.toString()
    // console.log(addedReview._id)
    const bookOfReview = await bookMethods.get(addedReview.bookBeingReviewed.toString());
    // console.log(bookOfReview.reviews)
    bookOfReview.reviews.push(addedReview._id)
    // console.log("Created new book document with added review")
    // console.log(bookOfReview)
    const output = await bookMethods.update(bookOfReview._id,bookOfReview)
    return addedReview;
  },
  async getAll() {
    const reviewsCollection = await reviewsCol();
    const allreviews = await reviewsCollection.find({}).toArray();
    for (element in allreviews) {
      allreviews[element]._id = allreviews[element]._id.toString()
    }
    return allreviews;
  },
  async get(id) {
    parsedId = idProvided(id);
    const reviewsCollection = await reviewsCol();
    const review = await reviewsCollection.findOne({ _id: parsedId });
    if (review === null) throw `Could not find a review with id: ${id}`;
    // review._id.toString()
    return review;
  },
  async remove(id) {
    parsedId = idProvided(id);
    const review = await this.get(id);
    const title = review.title;
    const reviewsCollection = await reviewsCol();

    const deletionInfo = await reviewsCollection.removeOne({ _id: parsedId });
    if (deletionInfo.deletedCount === 0)
      throw `Could not remove a review with id: ${id}`;
    review._id = review._id.toString()
    const bookOfReview = await bookMethods.get(review.bookBeingReviewed.toString());
    for (let i = 0; i < bookOfReview.reviews.length; i++) {
      if (bookOfReview.reviews[i] === review._id) {
        bookOfReview.reviews.splice(i,1);
      }
    }
    // console.log(bookOfReview)
    const output = await bookMethods.update(bookOfReview._id,bookOfReview)

    return `${title} has been successfully deleted`;
  },
};

