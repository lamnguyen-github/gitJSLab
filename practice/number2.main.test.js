import { isDecreasingNumber } from './number2';

describe('Test Number Increasing', () => {
    test('increasing true1', () => {
        expect(isDecreasingNumber(321)).toBe(true);
    });
    test('increasing true2', () => {
        expect(isDecreasingNumber(654)).toBe(true);
    });
    test('increasing true3', () => {
        expect(isDecreasingNumber(987)).toBe(true);
    });
});

describe('Test Number Increasing', () => {
    test('increasing false1', () => {
        expect(isDecreasingNumber(11)).toBe(false);
    });
    test('increasing false2', () => {
        expect(isDecreasingNumber(22311)).toBe(false);
    });
    test('increasing false3', () => {
        expect(isDecreasingNumber(1231)).toBe(false);
    });
});