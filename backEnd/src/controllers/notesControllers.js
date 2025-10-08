import Note from "../models/Note.js";

export async function getAllNotes(_, res) {
  try {
    // Note.find().sort({ createdAt: -1 } have sorted has last one created
    const allNotes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(allNotes);
  } catch (e) {
    console.error("Error in getAllNotes controller", e);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({
      title,
      content,
    });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (e) {
    console.error("Error in createNote controller", e);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getNote(req, res) {
  try {
    const { id } = req.params;
    const getOneNote = await Note.findById(id);
    res.status(200).json(getOneNote);
  } catch (e) {
    console.error("Error in getNote controller", e);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updateNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });

    if (!updateNote) return res.status(404).json({ message: "Note not found!" });
    res.status(200).json(updateNote);
  } catch (e) {
    console.error("Error in updateNote controller", e);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const { id } = req.params;
    const deleteNote = await Note.findByIdAndDelete(id);
    if (!deleteNote) return res.status(404).json({ message: "Note not found!" });
    res.status(200).json(deleteNote);
  } catch (e) {
    console.error("Error in deleteNote controller", e);
    res.status(500).json({ message: "Internal server error" });
  }
}
