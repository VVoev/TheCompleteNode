const { mongoose } = require('../server/mongoose/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user')
const { ObjectID } = require('mongodb');

Todo.findByIdAndRemove('5aeec589afb42429ac9ce80f').then((todo) => {
    console.log(todo);
})