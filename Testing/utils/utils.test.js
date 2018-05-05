const utils = require('./utils');
const expect = require('expect');


describe('Utils are here', () => {
    it('should add two numbers', () => {
        var res = utils.add(11, 15);
        expect(res).toBe(26);
    })

    it('should add two numbers Async', (done) => {
        var res = utils.asyncAdd(10, 15, (sum) => {
            expect(sum).toBe(25);
            done();
        })
    })

    it('should give a square of a number', () => {
        var res = utils.square(5);
        expect(res).toBe(25);
    })

    it('should give a square of a number async', (done) => {
        var res = utils.asyncSquare(8, (sum) => {
            expect(sum).toBe(64);
            done();

        });
    })

    it('expert name to be set correct', () => {
        var person = utils.setName({}, 'John Snow');
        expect(person.firstName).toBe('John');
        expect(person.lastName).toBe('Snow');
    })
})