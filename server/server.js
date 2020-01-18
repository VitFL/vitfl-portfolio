import * as path from "path";
import { resolve } from "path";
import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import mainContentRouter from "./routings/maincontent";

const apiBasePATH = "/api";
config({ path: resolve(__dirname, "../.env") });

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const {
  env: { MONGODB_URI }
} = process;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("Mongo connected"))
  .catch(err => console.log(err));

app.use(`${apiBasePATH}/maincontent`, mainContentRouter);

// serve react client on production enviroment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
