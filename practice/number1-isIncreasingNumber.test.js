import { isIncreasingNumber } from './number1';

describe('Test Number Increasing', () => {
    test('increasing true1', () => {
        expect(isIncreasingNumber(123)).toBe(true);
    });
    test('increasing true2', () => {
        expect(isIncreasingNumber(456)).toBe(true);
    });
    test('increasing true3', () => {
        expect(isIncreasingNumber(789)).toBe(true);
    });
});

describe('Test Number Increasing', () => {
    test('increasing false1', () => {
        expect(isIncreasingNumber(11)).toBe(false);
    });
    test('increasing false2', () => {
        expect(isIncreasingNumber(22311)).toBe(false);
    });
    test('increasing false3', () => {
        expect(isIncreasingNumber(1231)).toBe(false);
    });
});