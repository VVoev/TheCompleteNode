//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connect to Mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({ _id: new ObjectID('5aeda3de30d70626642890e9') }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos')
    // })

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count ${count}`)
    }, (err) => {
        console.log('problem with the count of todos collection')
    })

    client.close();
})