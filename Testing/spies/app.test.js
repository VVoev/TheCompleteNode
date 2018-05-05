const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app.js')

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    }
    app.__set__('db', db);

    it('should call the spy correclty', () => {
        var spy = expect.createSpy();
        spy('Packo', 22);
        expect(spy).toHaveBeenCalledWith('Packo', 22);
    })
    it('should call saveUser with user object', () => {
        var email = 'test@abv.bg';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    })
})