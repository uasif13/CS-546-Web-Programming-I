const showsRoutes = require("./shows");
const aboutMeRoute = require("./aboutme");

const constructor = (app) => {
  app.use("/shows", showsRoutes);
  app.use("/aboutme", aboutMeRoute);
  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructor;
