import { hexToRgb } from '@helpers/hexToRgb';

describe('hexToRgb test', () => {
    const hexColor = '#ff0000';
    const correctResult = '255,0,0';

    it('Test if hexToRgb returns correct result', () => {
        expect(hexToRgb(hexColor)).toBe(correctResult);
    });

    it('Test if hexToRgb returns null result after has wrong input', () => {
        expect(hexToRgb('')).toBeNull();
        expect(hexToRgb('wrong color')).toBeNull();
    });
});
