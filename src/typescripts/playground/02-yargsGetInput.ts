const yargs = require('yargs');
import {INote} from './interfaces/INote';
import {addNote, readNote, readNotes, removeNote} from './03-fsModule';
import {v4 as uuidv4} from 'uuid';

yargs.command({
    command: 'add',
    describe: 'Adding new note',
    handler: (argv: INote) => {
        //saving note to assets/notes.json
        addNote({
            id: uuidv4(), 
            title: argv.title,
            body: argv.body
        });
    }
});

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: (argv: INote) => {
        //removing note form assets/notes.json
        removeNote(argv.id);
    }
});

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: (argv: INote) => {        
        readNote(argv.id, (note) => console.log(note));
    }
});

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
        readNotes((notes) => console.log(notes));
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
    node src/build/playground/02-yargsGetInput.js remove --id='<Id from assets/notes.json>'
    node src/build/playground/02-yargsGetInput.js read --id='<Id from assets/notes.json>'
    node src/build/playground/02-yargsGetInput.js list
*************************/