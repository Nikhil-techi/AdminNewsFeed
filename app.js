const express = require("express");
const app = express();

const cors = require("cors");
const articleroute = require("./Routes/ArticleRoute");

app.use(cors());
app.use(express.json());

app.use("/article", articleroute);
app.use(express.static("./View/build"));

app.listen(9000, (err) => {
  console.clear();
  console.log("http://localhost:9000/");
});
