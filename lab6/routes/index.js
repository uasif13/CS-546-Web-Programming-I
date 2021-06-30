const booksRoutes = require("./books");
const reviewsRoute = require("./reviews");

const constructor = (app) => {
  app.use("/books", booksRoutes);
  app.use("/reviews", reviewsRoute);
  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructor;
