import express from "express";
import { getBuddyAdvice } from "../controllers/aiController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/buddy", protect, getBuddyAdvice);

export default router;