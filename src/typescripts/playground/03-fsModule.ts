const fs = require('fs');
const path = require('path');
import { INote } from "./interfaces/INote";

const notesPath = path.join(__dirname, '../../..', 'assets/notes.json');

export const readNotes = (callback) => {
    fs.readFile(notesPath, 'utf8', (err, data) => {
        if(err) {
            throw new Error(err);
        }

        callback(data);
    });
}

const writeFile = (notes: Array<INote>, callback) => {
    fs.writeFile(notesPath, JSON.stringify(notes), (err) => {
        if(err) {
            throw new Error(err);
        }

        callback('Data saved successfully');
    });
}

export const addNote = (note: INote) => {   
    readNotes((data) => {
        const notes = (data !== undefined && data.length > 0) ? JSON.parse(data) : [];
        const savedNotes = [...notes, note];

        writeFile(savedNotes, (writeResponse) => {
            console.log(writeResponse)
        })
    });
}

export const removeNote = (id: string) => {
    readNotes((data) => {
        const notes = (data !== undefined && data.length > 0) ? JSON.parse(data) : new Array<INote>();
        const savedNotes = notes.filter((note) => note.id !== id);

        writeFile(savedNotes, (writeResponse) => {
            console.log(writeResponse)
        })
    });
}

export const readNote = (id: string, callback) => {
    readNotes((data) => {
        const notes = (data !== undefined && data.length > 0) ? JSON.parse(data) : new Array<INote>();
        const result = notes.find((note) => note.id === id);
        callback(result);
    });
}