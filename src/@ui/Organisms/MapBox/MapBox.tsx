import React from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import styled from 'styled-components';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_PUBLIC_TOKEN as string;

function MapBox() {
    const mapContainer = React.useRef<HTMLDivElement | null>(null);
    const map = React.useRef<Map | null>(null);

    const [lng, setLng] = React.useState(21.0362);
    const [lat, setLat] = React.useState(52.2477);
    const [zoom, setZoom] = React.useState(12.59);

    React.useEffect(() => {
        if (map.current) return; // initialize map only once
        if (!mapContainer.current) return;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom,
        });
    }, []);

    React.useEffect(() => {
        if (!map.current) return; // wait for map to initialize

        map.current.on('move', () => {
            setLng(+map.current!.getCenter().lng.toFixed(4));
            setLat(+map.current!.getCenter().lat.toFixed(4));
            setZoom(+map.current!.getZoom().toFixed(2));
        });
    }, [map]);

    return (
        <MapContainer>
            <MapDetails>
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </MapDetails>
            <MapWrapper ref={mapContainer} />
        </MapContainer>
    );
}

export { MapBox };

const MapContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    max-width: 100vw;
    max-height: 100vh;
    width: 100vw;
    height: 100vh;
    font-size: 0;
`;

const MapWrapper = styled.div`
    position: relative;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    z-index: 0;
`;

const MapDetails = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 1rem;
    z-index: 1;
`;
