import express, { Router } from "express";
import { registerUser, loginUser } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/", registerUser);

export default Router;
