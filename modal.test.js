const {validate} = require("./modal.js");



describe('Testing validate function', () => {
    test('It should return true because the function is defined', () => {
        expect(validate).toBeDefined();
    });
    test('It should return true as validate is a function', () => {
        expect(typeof validate).toBe('function');
    });
});