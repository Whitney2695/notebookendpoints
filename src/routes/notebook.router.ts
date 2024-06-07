import { Request, Response } from "express";
import { addNotebook } from "../controller/notebook.controller";
import { Router } from "express";

const express = require('express');
const notebook_router = Router();

notebook_router.post('/notebooks', addNotebook);

notebook_router.get('/notebooks', async (req: Request, res: Response) => {
  // Implement fetching all notebooks logic here
});

notebook_router.put('/notebooks/:id', async (req: Request, res: Response) => {
  // Implement updating a notebook logic here
});

notebook_router.delete('/notebooks/:id', async (req:Request, res:Response) => {
  // Implement deleting a notebook logic here
});

export default notebook_router;
