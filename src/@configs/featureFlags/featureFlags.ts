import { booleanEnv } from '@helpers/booleanEnv';

interface FeatureFlagsParams {
    MAPBOX_ENABLED: boolean;
}

const FEATURE_FLAGS: FeatureFlagsParams = {
    MAPBOX_ENABLED: booleanEnv(process.env.REACT_APP_FEATURE_FLAG_MAPBOX),
};

export { FEATURE_FLAGS };
