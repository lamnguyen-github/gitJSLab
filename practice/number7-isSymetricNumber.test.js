import { isSymetricNumber } from './number7';

describe('isSymetricNumber true', () => {
    test('handle 11 ', () => {
        expect(isSymetricNumber(11)).toBe(true);
    });
    test('handle 12321 ', () => {
        expect(isSymetricNumber(12321)).toBe(true);
    });

});
describe('isSymetricNumber false', () => {
    test('handle 11 ', () => {
        expect(isSymetricNumber(12)).toBe(false);
    });
    test('handle 12321 ', () => {
        expect(isSymetricNumber(12321)).toBe(true);
    });

});