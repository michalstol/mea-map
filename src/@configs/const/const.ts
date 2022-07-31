// ENV VARIABLES
const STORAGE_FACADE_PREFIX = `${import.meta.env.VITE_LOCAL_STORAGE_PREFIX}_`;
const MAPBOX_API_URL = 'https://api.mapbox.com/geocoding/v5';
const MAPBOX_FORWARD_GEOCODING_ENDPOINT = `${MAPBOX_API_URL}/mapbox.places/{query}.json?access_token=${
    import.meta.env.VITE_MAPBOX_API_KEY
}&language=en`;
const MAPBOX_REVERSE_GEOCODING_ENDPOINT = `${MAPBOX_API_URL}/mapbox.places/{longitude},{latitude}.json?access_token=${
    import.meta.env.VITE_MAPBOX_API_KEY
}&language=en`;

// STYLES VARIABLES
const baseScale = 8;
const defaultFontSize = baseScale * 2;

export {
    // ENV VARIABLES
    STORAGE_FACADE_PREFIX,
    MAPBOX_API_URL,
    MAPBOX_FORWARD_GEOCODING_ENDPOINT,
    MAPBOX_REVERSE_GEOCODING_ENDPOINT,
    // STYLES VARIABLES
    baseScale,
    defaultFontSize,
};
