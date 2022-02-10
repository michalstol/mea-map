function booleanEnv(input?: string): boolean {
    return input === 'true';
}

interface FeatureFlagsParams {
    MAPBOX_ENABLED: boolean;
}

const FEATURE_FLAGS: FeatureFlagsParams = {
    MAPBOX_ENABLED: booleanEnv(process.env.REACT_APP_FEATURE_FLAG_MAPBOX),
};

export { FEATURE_FLAGS };
