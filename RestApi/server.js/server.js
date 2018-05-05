var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
})

var newTodo = new Todo({
    text: 'Save the video',
    completed: false,
    completedAt: 331122
})

// newTodo.save().then((doc) => {
//     console.log('saved todo', doc)
// }).catch((e) => {
//     console.log(`unable to save todo`)
// })

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
})

var user = new User({
    email: 'minko@abv.bg'
})

user.save().then((doc) => {
    console.log(`User saved`, doc);
}).catch((e) => {
    console.log(`Error while saving the user`, e);
})