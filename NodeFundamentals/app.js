console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    typeof note !== 'undefined' ? console.log('Node Created') : console.log('Node title taken');
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(allNotes);
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    var msg = note.length > 0 ? note : 'Not found';
    console.log(msg);
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var msg = noteRemoved ? 'Note was removed' : 'Node not found';
    console.log(msg);
} else {
    console.log('Command not recognized');
}