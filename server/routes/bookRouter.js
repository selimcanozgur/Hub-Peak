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

Router.route("/admin").post(
  isAuthenticatedUser,
  authorizeRoles("admin"),
  createBook
);
Router.route("/admin/:id")
  .patch(isAuthenticatedUser, authorizeRoles("admin"), updateBook)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteBook);

Router.get("/", getAllBook);
Router.get("/:id", getOneBook);

export default Router;
