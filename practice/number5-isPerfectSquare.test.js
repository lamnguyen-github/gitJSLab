import { isPerfectSquare } from './number5';

describe('isPerfectSquare true', () => {
    test('handle 6 ', () => {
        expect(isPerfectSquare(4)).toBe(true);
    });
    test('should ', () => {
        expect(isPerfectSquare(9)).toBe(true);
    });
    test('should ', () => {
        expect(isPerfectSquare(25)).toBe(true);
    });
});