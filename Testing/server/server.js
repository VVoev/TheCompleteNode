const express = require('express');

var app = express();

var users = [
    petko = {
        firstname: 'petko',
        age: 28,
        car: 'vw'
    },
    packo = {
        firstname: 'packo',
        age: 21,
        car: 'audi'
    },
    rosko = {
        firstname: 'rosko',
        age: 23,
        car: 'horse'
    },
]

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo app 1.0'
    });
})

app.get('/users', (req, res) => {
    res.status(200).send(users);
})

app.listen(3000, () => {
    console.log(`server is running on 3000`);
})

module.exports.app = app;