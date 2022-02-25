import { isPrime } from './number4';

describe('Name of the group', () => {
    test('should1 ', () => {
        expect(isPrime(3)).toBe(true);
    });
    test('should2 ', () => {
        expect(isPrime(11)).toBe(true);
    });

});

describe('Name of the group', () => {
    test('shouldF1 ', () => {
        expect(isPrime(4)).toBe(false);
    });
    test('shouldF2 ', () => {
        expect(isPrime(4)).toBe(false);
    });

});