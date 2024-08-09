import app from "./app.js";
import mongoose from "mongoose";

const port = process.env.PORT || 3000;
const db_uri = process.env.DB_URI.replace(
  "<password>",
  process.env.DB_PASSWORD
);

console.log("Port", port);
