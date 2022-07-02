import express from "express";
import {
  newCreation,
  getCreation,
  getCreations,
  deleteCreation,
} from "../controllers/creations.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", newCreation);

// GET ALL
router.get("/", getCreations, verifyToken);

// GET
router.get("/:id", getCreation);

// DELETE
router.delete("/:id", deleteCreation, verifyToken);

export default router;
