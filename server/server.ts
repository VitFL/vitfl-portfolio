import * as path from "path";
import { resolve } from "path";
import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

config({ path: resolve(__dirname, "../.env") });

const apiBasePATH = "/api";
const mainContentRoute = require("./routings/maincontent");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const db = require("./config/db").mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("Mongo connected"))
  .catch(err => console.log(err));

app.use(`${apiBasePATH}/maincontent`, mainContentRoute);

// serve react client on production enviroment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
