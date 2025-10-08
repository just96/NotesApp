import express from "express";
import { getAllNotes, createNote, getNote, updateNote, deleteNote } from "../controllers/notesControllers.js";
import { catchAsync } from "../utils/catchAsync.js";

const router = express.Router();

router.get("/", catchAsync(getAllNotes));
router.post("/", catchAsync(createNote));
router.get("/:id", catchAsync(getNote));
router.put("/:id", catchAsync(updateNote));
router.delete("/:id", catchAsync(deleteNote));

export default router;
