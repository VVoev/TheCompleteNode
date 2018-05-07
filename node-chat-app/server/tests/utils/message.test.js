var expect = require('expect');
var { generateMessage } = require('../../../server/utils/message');

describe('GenerateMessage', () => {
    it('should generate a correct message object', () => {
        var message = generateMessage('Ivan', 'I want to eat pizza')
        var isNumber = typeof (message.createdAt);
        expect(message.from === 'Ivan');
        expect(message.text === 'I want to eat pizza');
        expect(isNumber).toBe('number');
    })
})