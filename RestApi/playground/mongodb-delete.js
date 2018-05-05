//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connect to Mongodb server');
    const db = client.db('TodoApp');

    //delete many
    // db.collection('Users').deleteMany({ name: 'Packo' }).then((result) => {
    //     console.log(result);
    // })

    //delete one
    // db.collection('Users').deleteOne({ name: 'Packo' }).then((result) => {
    //     console.log(result);
    // })

    //find one and delete
    db.collection('Todos').findOneAndDelete({ completed: true }).then((result) => {
        console.log(result);
    })
    client.close();
})