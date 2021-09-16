console.log(process.argv);
const argVal = process.argv[2];
if (argVal === 'add') {
    console.log('Adding notes');
}
else if (argVal === 'remove') {
    console.log('Removing notes');
}
else {
    console.log('Not sure about the input');
}
/*************************
**Help with terminal command
node src/typescripts/playground/01-cmdArguments.ts add
*************************/ 
