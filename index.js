const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes/index");
const path = require("path");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json({ extended: false }));

app.use(cors());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "./views")));

app.use("/api", apiRouter);
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(port, () => {
  console.log(`Listening on PORT ${port}`);
});

module.exports = app;
