import express from "express";
import { verifyToken } from "../middleware/auth";
import { getUser } from "../controllers/users";

const router = express.Router();

router.get("/", verifyToken, getUser);

export default router;
