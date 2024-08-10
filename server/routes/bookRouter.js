import express from "express";
import {
  getAllBook,
  getOneBook,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";
import { isAuthenticatedUser, authorizeRoles } from "../utils/auth.js";

const Router = express.Router();

Router.route("/admin").post(createBook);
Router.route("/admin/:id").patch(updateBook).delete(deleteBook);

Router.get("/", getAllBook);
Router.get("/:id", getOneBook);

export default Router;
