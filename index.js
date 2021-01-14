const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
dotenv.config();

mongoose.connect(
  process.env.MONGO_URI,
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to database");
  }
);

app.use(cors());

app.use("/api", require("./routes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.use("*", (req, res) =>
    res.sendFile(path.join("client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(PORT));
