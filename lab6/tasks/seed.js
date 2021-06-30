const dbConnection = require('../config/mongoConnection');
const dataMethods = require("../data/index");
const bookMethods = dataMethods.books;
const reviewMethods = dataMethods.reviews

async function main() {
  const db = await dbConnection();
  await db.dropDatabase();

  const book1Data = {
      title: "To Kill a Mockingbird",
      author: {authorFirstName: "Harper", authorLastName: "Lee"},
      genre: ["thriller", "domestic fiction"],
      datePublished: "07/11/1960",
      summary: "Set in the small Southern town of Maycomb, Alabama, during the Depression, To Kill a Mockingbird follows three years in the life of 8-year-old Scout Finch, her brother, Jem, and their father, Atticus--three years punctuated by the arrest and eventual trial of a young black man accused of raping a white woman.",
      reviews: []
  }
  const book1 = await bookMethods.create(book1Data.title,book1Data.author,book1Data.genre,book1Data.datePublished,book1Data.summary,book1Data.reviews)
  const book1id = book1._id
  // console.log(typeof(book1._id))
  // console.log(book1)
  const review1aData = {
      title: "A great story about respect",
      reviewer: "ontherun",
      bookBeingReviewed: `${book1._id}`,
      rating: 5,
      dateOfReview: "04/09/2008",
      review: "I remember seeing the movie when I was a kid. I'm really glad that I read the book though it has so much more. I'm reading it to my 11 year old. It is a great story about respecting others. Atticus doesn't preach to his kids he gently guides them to respect everyone. I would recommend this as a family read for all kids 5th or 6th grade and up and then watch the movie and compare it to the book."
  }
  const review1a = await reviewMethods.create(review1aData.title, review1aData.reviewer, review1aData.bookBeingReviewed, review1aData.rating, review1aData.dateOfReview, review1aData.review)
  const review1bData = {
    title: "A must-read for 13+",
    reviewer: "moviemadness",
    bookBeingReviewed: `${book1._id}`,
    rating: 5,
    dateOfReview: "04/09/2008",
    review: "This book is a wonderful look at the south and people's attitudes. Its amazing insights and powerful message is inspiring and genuine. It is not inappropriate for children under thirteen, but the messages and reading level mean that a person must be enough advanced to get everything out of it."
  }
  const review1b = await reviewMethods.create(review1bData.title, review1bData.reviewer, review1bData.bookBeingReviewed, review1bData.rating, review1bData.dateOfReview, review1bData.review)
  // console.log(review1a)
  const book1updated = await bookMethods.get(book1id)
  // console.log()

  // console.log(review1b)
  // console.log(book1updated)

  const book2Data = {
      title: "To Kill a Mockingbird",
      author: {authorFirstName: "Harper", authorLastName: "Lee"},
      genre: ["thriller", "domestic fiction"],
      datePublished: "07/11/1960",
      summary: "Set in the small Southern town of Maycomb, Alabama, during the Depression, To Kill a Mockingbird follows three years in the life of 8-year-old Scout Finch, her brother, Jem, and their father, Atticus--three years punctuated by the arrest and eventual trial of a young black man accused of raping a white woman.",
      reviews: []
  }
  const book2 = await bookMethods.create(book2Data.title,book2Data.author,book2Data.genre,book2Data.datePublished,book2Data.summary,book2Data.reviews)
  const book2id = book2._id
  // console.log(book2)
  const review2aData = {
      title: "A great story about respect",
      reviewer: "ontherun",
      bookBeingReviewed: `${book2._id}`,
      rating: 5,
      dateOfReview: "04/09/2008",
      review: "I remember seeing the movie when I was a kid. I'm really glad that I read the book though it has so much more. I'm reading it to my 11 year old. It is a great story about respecting others. Atticus doesn't preach to his kids he gently guides them to respect everyone. I would recommend this as a family read for all kids 5th or 6th grade and up and then watch the movie and compare it to the book."
  }
  const review2a = await reviewMethods.create(review2aData.title, review2aData.reviewer, review2aData.bookBeingReviewed, review2aData.rating, review2aData.dateOfReview, review2aData.review)
  const review2bData = {
    title: "A must-read for 13+",
    reviewer: "moviemadness",
    bookBeingReviewed: `${book2._id}`,
    rating: 5,
    dateOfReview: "04/09/2008",
    review: "This book is a wonderful look at the south and people's attitudes. Its amazing insights and powerful message is inspiring and genuine. It is not inappropriate for children under thirteen, but the messages and reading level mean that a person must be enough advanced to get everything out of it."
  }
  const review2b = await reviewMethods.create(review2bData.title, review2bData.reviewer, review2bData.bookBeingReviewed, review2bData.rating, review2bData.dateOfReview, review2bData.review)
  const book2updated = await bookMethods.get(book2id)
  // console.log(review2a)
  // console.log(review2b)
  // console.log(book2updated)
  // console.log(await bookMethods.getAll())
  // const originalBook = await bookMethods.get(book2id)
  // console.log(originalBook)
  // for (element in originalBook.reviews){
  //   await reviewMethods.remove(originalBook.reviews[element])
  // }
  // await bookMethods.remove(book2id)
  console.log('Done seeding database');
  await db.serverConfig.close();
}

main();