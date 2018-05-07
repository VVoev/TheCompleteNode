var expect = require('expect');
var { generateMessage, generateLocationMessage } = require('../../../server/utils/message');

describe('GenerateMessage', () => {
    it('should generate a correct message object', () => {
        var message = generateMessage('Ivan', 'I want to eat pizza')
        var isNumber = typeof (message.createdAt);
        expect(message.from === 'Ivan');
        expect(message.text === 'I want to eat pizza');
        expect(isNumber).toBe('number');
    })
})
describe('GenerateLocationMessage', () => {
    it('should generate a corret location message', () => {
        var name = 'Ivan';
        var message = generateLocationMessage(name, 22.5555, 44.532);

        expect(typeof (message.createdAt)).toBe('number');
    })
})