"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readNote = exports.removeNote = exports.addNote = exports.readNotes = void 0;
const fs = require('fs');
const path = require('path');
const notesPath = path.join(__dirname, '../../..', 'assets/notes.json');
const readNotes = (callback) => {
    fs.readFile(notesPath, 'utf8', (err, data) => {
        if (err) {
            throw new Error(err);
        }
        callback(data);
    });
};
exports.readNotes = readNotes;
const writeFile = (notes, callback) => {
    fs.writeFile(notesPath, JSON.stringify(notes), (err) => {
        if (err) {
            throw new Error(err);
        }
        callback('Data saved successfully');
    });
};
const addNote = (note) => {
    (0, exports.readNotes)((data) => {
        const notes = (data !== undefined && data.length > 0) ? JSON.parse(data) : [];
        const savedNotes = [...notes, note];
        writeFile(savedNotes, (writeResponse) => {
            console.log(writeResponse);
        });
    });
};
exports.addNote = addNote;
const removeNote = (id) => {
    (0, exports.readNotes)((data) => {
        const notes = (data !== undefined && data.length > 0) ? JSON.parse(data) : new Array();
        const savedNotes = notes.filter((note) => note.id !== id);
        writeFile(savedNotes, (writeResponse) => {
            console.log(writeResponse);
        });
    });
};
exports.removeNote = removeNote;
const readNote = (id, callback) => {
    (0, exports.readNotes)((data) => {
        const notes = (data !== undefined && data.length > 0) ? JSON.parse(data) : new Array();
        const result = notes.find((note) => note.id === id);
        callback(result);
    });
};
exports.readNote = readNote;
