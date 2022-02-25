import { isIncreasingNumberByDistance } from './number3';

describe('Name of the group', () => {
    test('should 1', () => {
        expect(isIncreasingNumberByDistance(135, 2)).toBe(true);
    });
    test('should 1', () => {
        expect(isIncreasingNumberByDistance(123, 1)).toBe(true);
    });
    test('should 1', () => {
        expect(isIncreasingNumberByDistance(148, 3)).toBe(true);
    });
});

describe('Name of the group', () => {
    test('should 1', () => {
        expect(isIncreasingNumberByDistance(135, 1)).toBe(false);
    });
    test('should 1', () => {
        expect(isIncreasingNumberByDistance(1223, 1)).toBe(false);
    });
    test('should 1', () => {
        expect(isIncreasingNumberByDistance(147, 3)).toBe(false);
    });
});