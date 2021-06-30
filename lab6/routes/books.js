const express = require("express");
const router = express.Router();
const dataMethods = require("../data/index");
const bookMethods = dataMethods.books;
const reviewMethods = dataMethods.reviews;

router.get("/", async (req, res) => {
  try {
    const data = await bookMethods.getAll()
    const formatted = []
    for (element in data) {
      newFormat = {"_id": data[element]._id, "title": data[element].title};
      formatted.push(newFormat)
    }
    res.json(formatted);
  } catch (e) {
    res.status(500).send();
  }
});
router.post("/", async (req, res) => {
  let bookData = req.body;
  if (!bookData) {
    res.status(400).json({error: 'You must provide a book'})
    return;
  }if (!bookData.title) {
    res.status(400).json({error: 'You must provide book title'})
    return;
  }
  if (!bookData.author) {
    res.status(400).json({error: 'You must provide book author'})
    return;
  }
  if (!bookData.genre) {
    res.status(400).json({error: 'You must provide book genre'})
    return;
  }
  if (!bookData.datePublished) {
    res.status(400).json({error: 'You must provide book datePublished'})
    return;
  }
  if (!bookData.summary) {
    res.status(400).json({error: 'You must provide book summary'})
    return;
  }
  try {
    const {title, author, genre, datePublished, summary} = bookData;
    const newBook = await bookMethods.create(title, author, genre,datePublished, summary, [])
    res.json(newBook);
  } catch (e) {
    res.status(400).json({error: e});
  }
});
router.get("/:id", async (req, res) => {
  try {
    await bookMethods.get(req.params.id.toString());
  } catch (e) {
    res.status(404).json({error: 'Book not found'})
  }
  try {
    const data = await bookMethods.get(req.params.id.toString());
    res.json(data);
  } catch (e) {
    res.status(500).send();
  }
});

router.put("/:id", async (req, res) => {
  const updatedData = req.body;
  if (!updatedData.title || !updatedData.author || !updatedData.genre || !updatedData.datePublished || !updatedData.summary) {
    res.status(400).json({error: 'You must supply all fields'})
    return;
  }
  try {
    await bookMethods.get(req.params.id.toString());
  } catch (e) {
    res.status(404).json({error: 'Book not found'})
  }
  try {
    const originalBook = bookMethods.get(req.params.id.toString())
    updatedData.reviews = originalBook.reviews
    const updatedBook = await bookMethods.update(req.params.id.toString(), updatedData) 
    res.json(updatedBook);
  } catch (e) {
    res
      .status(400)
      .json({ error: e});
  }
});
router.patch("/:id", async (req, res) => {
  const requestBody = req.body;
  if (typeof requestBody !== "object" || requestBody === null || requestBody === {}) {
    res.status(400).json({error: 'You must supply one field to update'})
  }
  let updatedObject = {}
  try {
    await bookMethods.get(req.params.id.toString());
  } catch (e) {
    res.status(404).json({error: 'Book not found'})
  }
  try {
    const oldBook = await bookMethods.get(req.params.id.toString())
    updatedObject = oldBook
    delete updatedObject._id
    if (requestBody.title && requestBody.title !== oldBook.title)
      updatedObject.title = requestBody.title;
    if (requestBody.author && requestBody.author !== oldBook.author)
      updatedObject.author = requestBody.author;
    if (requestBody.genre && requestBody.genre !== oldBook.genre)
      updatedObject.genre = requestBody.genre.concat(oldBook.genre)
      final = updatedObject.genre.filter((item, pos) => updatedObject.genre.indexOf(item) === pos)
      updatedObject.genre = final
    if (requestBody.datePublished && requestBody.datePublished !== oldBook.datePublished)
      updatedObject.datePublished = requestBody.datePublished;
    if (requestBody.summary && requestBody.summary !== oldBook.summary)
      updatedObject.summary = requestBody.summary;
    updatedObject.reviews = oldBook.reviews
    const updatedBook = await bookMethods.update(req.params.id.toString(), updatedObject)
    res.json(updatedBook)
  } catch (e) {
    res.status(400).json({error: e})
  }
})

router.delete('/:id', async (req, res) => {
  if (!req.params.id) {
    res.status(400).json({error: 'You must supply an ID to delete'})
    return;
  }
  try {
    await bookMethods.get(req.params.id.toString())
  } catch (e) {
    res.status(404).json({error: 'Post not found'})
    return;
  }
  try {
    const originalBook = await bookMethods.get(req.params.id.toString())
    for (element in originalBook.reviews){
      await reviewMethods.remove(originalBook.reviews[element])
    }
    await bookMethods.remove(req.params.id.toString())
    res.json({"bookId": originalBook._id.toString(), "deleted": true})
  } catch (e) {
    res.status(500).json({error: e})
  }
})

module.exports = router;
