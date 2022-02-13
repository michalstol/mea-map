import { booleanEnv } from '@helpers/booleanEnv';

describe('booleanEnv test', () => {
    it('Test if booleanEnv return true', () => {
        const TEMP_ENV = 'true';

        expect(booleanEnv(TEMP_ENV)).toBeTruthy();
    });

    it('Test if booleanEnv return always false', () => {
        expect(booleanEnv()).toBeFalsy();
        expect(booleanEnv('')).toBeFalsy();
        expect(booleanEnv('false')).toBeFalsy();
    });
});
