module.exports.add = (a, b) => a + b;

module.exports.square = (x) => x * x;

module.exports.asyncSquare = (x, cb) => {
    setTimeout(() => {
        cb(x * x);
    }, 250);
}

module.exports.asyncAdd = (a, b, cb) => {
    setTimeout(() => {
        cb(a + b);
    }, 250);
}

module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
}