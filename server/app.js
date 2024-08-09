import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bookRouter from "./routes/bookRoute.js";

const app = express();

dotenv.config({ path: "./config/.env" });

app.use(express.json());
app.use(cors());

app.use("/api/v1/books", bookRouter);

export default app;
