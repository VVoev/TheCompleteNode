var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./mongoose/mongoose');
var { ObjectID } = require('mongodb');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e.message);
    });
});

app.get('/todos', (req, res) => {
    Todo.find()
        .then((todos) => {
            res.send({
                todos
            })
        }).catch((e) => {
            res.status(400).send(e);
        })
})

app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    Todo.findById(id)
        .then((todo) => {
            res.send({
                todo
            })
        }).catch((e) => {
            res.status(400).send(e);
        })
})

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(400).send({ error: 'not valid id' })
    } else {
        Todo.findByIdAndRemove(id)
            .then((todo) => {
                if (!todo) {
                    return res.status(400).send();
                }
                res.status(200).send(todo);
            }).catch((e) => {
                res.status(400).send();
            })
    }
})

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = { app };