export function getAllNotes(req, res) {
  res.status(200).send("You just fetched the notes!");
}

export function createNote(req, res) {
  res.status(201).json({ message: "Created a note sucessfuly!" });
}

export function getNote(req, res) {
  res.status(200).json({ message: "This is your note" });
}

export function updateNote(req, res) {
  res.status(200).json({ message: "Note updated sucessfuly!" });
}

export function deleteNote(req, res) {
  res.status(200).json({ message: "Note deleted sucessfuly!" });
}
