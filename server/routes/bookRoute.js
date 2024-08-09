import express from "express";
import { createBook, getAllBook } from "../controller/bookController.js";

const router = express.Router();

router.route("/").post(createBook).get(getAllBook);

export default router;
