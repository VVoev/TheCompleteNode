console.log('Starting notes.js');
const fs = require('fs');

var fetchNodes = () => {
  try {
    var noteString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(noteString);
    return notes;
  } catch (error) {
    return [];
  }
}

var saveNodes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = fetchNodes();
  var note = {
    title,
    body
  }
  var dublicatedNodes = notes.filter((note => {
    return note.title === title;
  }))
  if (dublicatedNodes.length === 0) {
    notes.push(note);
    saveNodes(notes);
    return note;
  }
};

var getAll = () => {
  var notes = fetchNodes();
  return notes;
};

var getNote = (title) => {
  var notes = fetchNodes();
  var neededNote = notes.filter((note) => note.title === title);
  return neededNote;
};

var removeNote = (title) => {
  var notes = fetchNodes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNodes(filteredNotes);

  return notes.length !== filteredNotes.length ? true : false;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
