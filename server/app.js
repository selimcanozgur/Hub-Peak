import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bookRouter from "./routes/bookRoute.js";
import cookieParser from "cookie-parser";
import errorController from "./controller/errorController.js";
import AppError from "./utils/appError.js";

const app = express();

dotenv.config({ path: "./config/.env" });

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/books", bookRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`${req.originalUrl} böyle bir sayfa bulunamadı`, 404));
});

app.use(errorController);

export default app;
