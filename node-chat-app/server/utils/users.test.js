const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {

    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: '1',
                name: 'Jena',
                room: 'Node'
            },
            {
                id: '2',
                name: 'Paco',
                room: 'Node'
            },
            {
                id: '3',
                name: 'Bobi',
                room: 'Js'
            },
        ]
    })
    it('should add a new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Vladko',
            room: 'Node'
        }
        var res = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
        expect(users.users.length).toEqual(1);
    })

    it('getUserList', () => {
        var nodeUsers = users.getUserList('Node');
        expect(nodeUsers).toContain('Jena');
        expect(nodeUsers).toContain('Paco');
        expect(nodeUsers.length).toBe(2);
    })

    it('getUser when existing', () => {
        var user = users.getUser('1');
        expect(user.name).toBe('Jena');
    })
    it('getUser return undefined when not existing', () => {
        var user = users.getUser('4');
        expect(user).toBe(undefined);
    })
    it('should remove a user', () => {
        var removedUser = users.removeUser('1');
        expect(removedUser.name).toBe('Jena');
        expect(users.users.length).toBe(2);
    })
    it('should not remove a user because of invalid id', () => {
        var removedUser = users.removeUser('99');
        expect(removedUser).toNotExist();
        expect(users.users.length).toBe(3);

    })
})