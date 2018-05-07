var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
})

socket.on('disconnect', function () {
    console.log('Disconected from the server');
})

socket.on('newMessage', function (data) {
    console.log('New msg:', data);
})

socket.emit('createMessage', {
    from: 'Frank',
    text: 'Hi'
}, function (data) {
    console.log('got it', data);
})