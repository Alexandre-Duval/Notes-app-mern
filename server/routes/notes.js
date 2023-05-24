import express from "express";
import { verifyToken } from "../middleware/auth";
import { getNotes, updateNotes } from "../controllers/notes";

const router = express.Router();
// Read
router.get("/", verifyToken, getNotes);
router.patch("/", verifyToken, updateNotes);

export default router;
