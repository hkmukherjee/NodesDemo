"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require('yargs');
const _03_fsModule_1 = require("./03-fsModule");
const uuid_1 = require("uuid");
yargs.command({
    command: 'add',
    describe: 'Adding new note',
    handler: (argv) => {
        //saving note to assets/notes.json
        (0, _03_fsModule_1.addNote)({
            id: (0, uuid_1.v4)(),
            title: argv.title,
            body: argv.body
        });
    }
});
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: (argv) => {
        //removing note form assets/notes.json
        (0, _03_fsModule_1.removeNote)(argv.id);
    }
});
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: (argv) => {
        (0, _03_fsModule_1.readNote)(argv.id, (note) => console.log(note));
    }
});
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
        (0, _03_fsModule_1.readNotes)((notes) => console.log(notes));
    }
});
console.log(yargs.argv);
/*************************
**Help with terminal command
-build
    npm run build-tsc -- --watch
-execute
    node src/build/playground/02-yargsGetInput.js --help
    node src/build/playground/02-yargsGetInput.js add --title='second note' --body='Second note to add'
*************************/ 
