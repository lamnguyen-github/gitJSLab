import { hasTwoDigitsWithSum } from './number8';

describe('hasTwoDigitsWithSum true', () => {
    test('handle 11 ', () => {
        expect(hasTwoDigitsWithSum(1234)).toBe(true);
    });
    test('handle 12321 ', () => {
        expect(hasTwoDigitsWithSum(123455)).toBe(true);
    });

});
describe('hasTwoDigitsWithSum false', () => {
    test('handle 11 ', () => {
        expect(hasTwoDigitsWithSum(12)).toBe(false);
    });
    test('handle 12321 ', () => {
        expect(hasTwoDigitsWithSum(12321)).toBe(false);
    });

});