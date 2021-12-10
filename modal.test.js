import {validate} from "./modal.js";
import {describe, expect} from "@jest/globals";


describe('Testing validate function', () => {
    test('It should return true because the function is defined', () => {
        expect(validate).toBeDefined();
    });
    test('It should return true as validate is a function', () => {
        expect(typeof validate).toBe('function');
    });
});