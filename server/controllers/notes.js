import Notes from "../models/Notes.js";

// CREATE
export const createNotes = async (req, res) => {
  try {
    const { userId, title, description, date } = req.body;
    const newNote = new Notes({
      userId,
      title,
      description,
      date,
    });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ
export const getNotes = async (req, res) => {
  try {
    const { userId } = req.params;
    const notes = await Notes.find({ userId });
    res.status(200).json(notes);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//UPDATE
export const updateNotes = async (req, res) => {
  const { id } = req.headers;
  try {
    await Notes.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).json("updated note");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deleteNotes = async (req, res) => {
  const { id } = req.headers;
  try {
    await Notes.findByIdAndDelete({ _id: id }, req.body);
    res.status(200).json("deleted note");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
