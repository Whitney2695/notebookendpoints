import { notebook } from "../interfaces/notebook"
import { Request, Response } from "express";
import { notebookService } from "../services/notebook.service";

let notebook: notebook[] = []

let noteService = new notebookService()

let addNotebook = async(req:Request, res:Response)=>{
    try{
        let {title, content, created_At} = req.body

        let response= noteService.createNotebook(req.body)
        
        return res.json({notebook: response})
    }catch(error){
        return res.json({
        error: error            
        })
    }
}
export{
    addNotebook
}


const getAllNotes = async (req:Request, res:Response) => {
  try {
    const notes = await noteService.getAll();
    res.status(200).json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const updateNote = async (req:Request, res:Response) => {
  try {
    const { id } = req.params;
    const noteData = req.body;
    const updatedNote = await noteService.update(id, noteData);
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const deleteNote = async (req:Request, res:Response) => {
  try {
    const { id } = req.params;
    await noteService.delete(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { addNotebook, getAllNotes, updateNote, deleteNote };
