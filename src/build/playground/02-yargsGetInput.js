"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require('yargs');
yargs.command({
    command: 'add',
    describe: 'Adding new note',
    handler: (argv) => {
        console.log('Success! new note added.', JSON.stringify({ title: argv.title, body: argv.body }));
    }
});
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: () => {
        console.log('Note removed.');
    }
});
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: () => {
        console.log('Get a note.');
    }
});
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
        console.log('Get list of all notes.');
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
