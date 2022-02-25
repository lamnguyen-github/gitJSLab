import { isDivisibleBy10 } from './number8';

describe('isDivisibleBy10 true', () => {
    test('handle 11 ', () => {
        expect(isDivisibleBy10(1234)).toBe(true);
    });
    test('handle 12321 ', () => {
        expect(isDivisibleBy10(123455)).toBe(true);
    });

});
describe('isDivisibleBy10 false', () => {
    test('handle 11 ', () => {
        expect(isDivisibleBy10(12)).toBe(false);
    });
    test('handle 12321 ', () => {
        expect(isDivisibleBy10(12321)).toBe(false);
    });

});