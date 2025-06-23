import express from "express";
import { getFinanceData } from "../controllers/financeController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", protect, getFinanceData);

export default router;
