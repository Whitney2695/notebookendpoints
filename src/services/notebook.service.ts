import { v4 as uuidv4 } from 'uuid';
import { notebook } from "../interfaces/notebook";

export class notebookService {
    private notebooks: notebook[] = [];

    createNotebook(note: notebook): notebook | undefined {
        let newNotebook: notebook = {
            id: uuidv4(),
            title: note.title,
            content: note.content,
            created_At: note.created_At
        };

        if (newNotebook.title && newNotebook.content && newNotebook.created_At) {
            this.notebooks.push(newNotebook);
            return newNotebook;
        } else {
            return undefined;
        }
    }

    getAll(): notebook[] {
        return this.notebooks;
    }

    update(id: string, newData: notebook): notebook | undefined {
        const index = this.notebooks.findIndex(note => note.id === id);
        if (index !== -1) {
            this.notebooks[index] = { ...this.notebooks[index], ...newData };
            return this.notebooks[index];
        } else {
            return undefined;
        }
    }

    delete(id: string): void {
        this.notebooks = this.notebooks.filter(note => note.id !== id);
    }
}
