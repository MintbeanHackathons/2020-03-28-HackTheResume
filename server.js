const PORT = 3000;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("resume");
})

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});