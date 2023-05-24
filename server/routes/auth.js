import express from "express";
import { login } from "../controllers/auth";

const router = express.Router();

app.post("/login", login);

export default router;
