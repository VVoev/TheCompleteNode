//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connect to Mongodb server');
    const db = client.db('TodoApp');

    //find one and update
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5aeda3de30d70626642890e9'),
    }, {
            $set: {
                completed: true,
                text: 'vsichko e tochno'
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        })
    client.close();
})