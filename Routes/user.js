import express from "express";
import authMiddleware from "../Middleware/authMiddleware.js";
import { getProfile } from "../Controllers/userController.js";

const router = express.Router();

router.get("/profile", authMiddleware, getProfile);

export default router;
