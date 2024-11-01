require("dotenv").config();
const connectDB = require("./config/db");

const express = require("express");

const app = express();

connectDB();

const PORT = process.env.PORT;

app.listen(PORT, (_req, res) => {
  console.log(`server listening to requests on port ${PORT}`);
});
