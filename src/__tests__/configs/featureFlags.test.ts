import { FEATURE_FLAGS } from '@configs/featureFlags';

describe('featureFlags test', () => {
    it('Test if FEATURE_FLAGS.MAPBOX_ENABLED is boolean ', () => {
        expect(typeof FEATURE_FLAGS.MAPBOX_ENABLED).toBe('boolean');
    });
});
