import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { chats } from "./data/data.js";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.routes.js";

const port = process.env.PORT;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server is up and running at port: ${port}`);
});
