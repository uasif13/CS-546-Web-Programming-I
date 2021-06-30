const express = require("express");
const router = express.Router();
const dataMethods = require("../data/index");
const reviews = require("../data/reviews");
const bookMethods = dataMethods.books;
const reviewMethods = dataMethods.reviews;

router.get("/:bookId", async (req, res) => {
  try {
    await bookMethods.get(req.params.bookId.toString());
  } catch (e) {
    res.status(400).json({error: 'Book not found'})
  }
  try {
    const data = await bookMethods.get(req.params.bookId.toString());
    const reviewsArray = []
    if (data.reviews.length === 0) 
      res.status(404).json({error: 'No reviews for the book'})
    for (element in data.reviews){
      reviewInBook = await reviewMethods.get(data.reviews[element].toString())
      reviewInBook._id = reviewInBook._id.toString()
      reviewsArray.push(reviewInBook)
    }
    res.json(reviewsArray);
  } catch (e) {
    res.status(404).send();
  }
});
router.post("/:bookId", async (req, res) => {
  try {
    await bookMethods.get(req.params.bookId.toString());
  } catch (e) {
    res.status(400).json({error: 'Book not found'})
  }
  try {
    const bookReviewed = await bookMethods.get(req.params.bookId.toString());
    const reviewData = req.body;
    if (!reviewData.title) {
      res.status(400).json({error: 'You must provide review title'})
      return;
    }
    if (!reviewData.reviewer) {
      res.status(400).json({error: 'You must provide review reviewer'})
      return;
    }
    if (!reviewData.bookBeingReviewed) {
      res.status(400).json({error: 'You must provide review bookBeingReviewed'})
      return;
    }
    if (!reviewData.rating) {
      res.status(400).json({error: 'You must provide review rating'})
      return;
    }
    if (!reviewData.dateOfReview) {
      res.status(400).json({error: 'You must provide review dateOfReview'})
      return;
    }
    if (!reviewData.review) {
      res.status(400).json({error: 'You must provide review review'})
      return;
    }
    const {title, reviewer, bookBeingReviewed, rating, dateOfReview, review} = reviewData;
    const newReview = await reviewMethods.create(title, reviewer, bookBeingReviewed, rating, dateOfReview, review)
    res.json(newReview);
  } catch (e) {
    res.status(400).json({error: e});
  }
});
router.get("/:bookId/:reviewId", async (req, res) => {
  try {
    await bookMethods.get(req.params.bookId.toString());
  } catch (e) {
    res.status(404).json({error: 'Book not found'})
  }
  try {
    const currentBook = await bookMethods.get(req.params.bookId.toString());
    const reviewID = req.params.reviewId.toString()
    if (currentBook.reviews.includes(reviewID)) {
      const currentReview = await reviewMethods.get(reviewID)
      res.json(currentReview)
    } else {
      res.status(404).json({error: 'Review not found'})
    }
  } catch (e) {
      res.status(404).json({error: 'Review not found'})
  }
});
router.delete('/:bookId/:reviewId', async (req, res) => {
  try {
    await bookMethods.get(req.params.bookId.toString());
  } catch (e) {
    res.status(404).json({error: 'Book not found'})
  }
  try {
    const currentBook = await bookMethods.get(req.params.bookId.toString());
    const reviewID = req.params.reviewId.toString()
    if (currentBook.reviews.includes(reviewID)) {
      const currentReview = await reviewMethods.remove(reviewID)
      res.json({"reviewId": reviewID, "deleted": true})
    } else {
      res.status(404).json({error: 'Review not found'})
    }
  } catch (e) {
      res.status(404).json({error: 'Review not found'})
  }
})

module.exports = router;
