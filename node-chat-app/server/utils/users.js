

class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        var user = { id, name, room };
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        var user = this.getUser(id);
        if (user) {
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user;
    }

    getUser(id) {
        var foundedUser = this.users.filter((user) => id === user.id)[0];
        return foundedUser;
    }

    getUserList(room) {
        var users = this.users.filter((user) => room === user.room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    }
}

module.exports = { Users };
