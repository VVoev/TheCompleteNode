const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
}

fs.writeFileSync('notes.json', JSON.stringify(originalNote));

var noteString = fs.readFileSync('notes.json');
var result = JSON.parse(noteString);
console.log(result);