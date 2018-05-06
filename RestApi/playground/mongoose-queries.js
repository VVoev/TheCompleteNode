const { mongoose } = require('../server/mongoose/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = reuqire('./../server/models/user')
const { ObjectID } = require('mongodb');

var id = '5aeebc6403840f2154a149b1';

if (!ObjectID.isValid(id)) {
    console.log('id not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
})

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todos', todo);
})

Todo.findById(id).then((todo) => {
    console.log(todo);
})