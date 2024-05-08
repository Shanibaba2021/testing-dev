const notesSchema = require("../Schemas/notesSchema");

const getnotes = async (req, res) => {
    try {
        const id = req.body.id;
        if (!id) {
            return res.status(404).json({ result: [], message: "User id required" });
        }
        const notes = await notesSchema.find({ user: id });
        if (!notes) {
            return res.status(404).json({ result: [], message: "No notes found" });
        } else {
            res.status(200).json({ result: notes, message: "Notes fetched successfully" });
        }
    } catch (err) {
        res.status(500).json({ result: [], message: "Something went wrong" });
    }
}

const createnote = async (req, res) => {
    const { title, description, user } = req.body;
    try {
        if(!title){
            return res.status(404).json({ result: [], message: "Title is required" });
        }

        if(!description){
            return res.status(404).json({ result: [], message: "Description is required" });
        }

        if(!user){
            return res.status(404).json({ result: [], message: "User id is required" });
        }

        const notes = await notesSchema.create({ title, description, user });
        if (!notes) {
            return res.status(404).json({ result: [], message: "Failed to create note" });
        } else {
            res.status(200).json({ result: notes, message: "Note created successfully" });
        }
    } catch (err) {
        res.status(500).json({ result: [], message: "Something went wrong" });
    }
}


const updatenote = async (req, res) => {

    const { title, description } = req.body;
    const id = req.body.id;
    try {

        if (!id) {
            return res.status(404).json({ result: [], message: "Note id is required" });  
        }

        const notes = await notesSchema.findByIdAndUpdate(id, { title, description });
        if (!notes) {
            return res.status(404).json({ result: [], message: "Failed to update note" });
        } else {
            res.status(200).json({ result: notes, message: "Note updated successfully" });
        }
    }
    catch (err) {
        res.status(500).json({ result: [], message: "Something went wrong" });
    }
}

const deletenote = async (req, res) => {
    const id = req.body.id;
    try {
        if(!id){
            return res.status(404).json({ result: [], message: "Note id not found" });
        }
        const notes = await notesSchema.findByIdAndDelete(id);
        if (!notes) {
            return res.status(404).json({ result: [], message: "Failed to delete note" });
        } else {
            res.status(200).json({ result: notes, message: "Note deleted successfully" });
        }
    } catch (err) {
        res.status(500).json({ result: [], message: "Something went wrong" });
    }
}


module.exports = { getnotes, createnote, updatenote, deletenote }