import app from "./app.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI.replace(
  "<password>",
  process.env.DB_PASSWORD
);

mongoose
  .connect(DB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening to port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
