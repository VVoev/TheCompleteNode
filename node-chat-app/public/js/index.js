var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
})

socket.on('disconnect', function () {
    console.log('Disconected from the server');
})

socket.on('newMessage', function (data) {
    console.log('New msg:', data);
    var li = jQuery('<li></li>')
    li.text(`${data.from} : ${data.text}`);

    jQuery('#messages').append(li);
})

socket.on('newLocationMessage', function (message) {
    console.log(message);
    var li = jQuery(`<li>${message.from} : <a href=${message.url}>My current location</a></li>`)
    console.log(message);
    jQuery('#messages').append(li);
})

jQuery('#message-form').on('submit', (e) => {
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function () {

    })
})

jQuery('#send-location').on('click', (e) => {
    if (!navigator.geolocation) {
        return alert('Geolocation not suppored by your browser');
    }

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }, () => {
        alert('Unable to fetch location');
    })
})