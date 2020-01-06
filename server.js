const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const testRoute = require("./routes/test");

const app = express();

const apiBasePATH = "/api";

app.use(bodyParser.json());

app.use(`${apiBasePATH}/test`, testRoute);

// static in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
