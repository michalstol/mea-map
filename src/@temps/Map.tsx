import React from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { MapLayerMouseEvent, MapLayerTouchEvent } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components';

import { useMap } from '@hooks/useMap';

function Map(): React.ReactElement {
    const { setPointed, pointed } = useMap();
    const [delay, setDelay] = React.useState(false);

    const onClickHandler = (
        e: MapLayerMouseEvent | MapLayerTouchEvent
    ): void => {
        if (!!pointed || delay) return;

        setPointed(e.lngLat);
    };

    const onRemoveHandler = () => {
        if (!pointed || delay) return;

        setPointed(null);
        setDelay(true);

        setTimeout(() => setDelay(false), 100);
    };

    return (
        <MapWrapper>
            <MapGL
                initialViewState={{
                    longitude: 21.006937467107917,
                    latitude: 52.231852751261044,
                    zoom: 14,
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={import.meta.env.VITE_MAPBOX_API_KEY}
                onClick={onClickHandler}
            >
                {!!pointed && (
                    <Marker
                        longitude={pointed.lng}
                        latitude={pointed.lat}
                        anchor="bottom"
                        draggable
                        onClick={onRemoveHandler}
                    >
                        <Img src="https://developers.google.com/maps/images/maps-icon.svg" />
                    </Marker>
                )}
            </MapGL>
        </MapWrapper>
    );
}

export { Map };

const MapWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 50vh;
    overflow: hidden;
`;

const Img = styled.img`
    width: 45px;
    height: 45px;
`;
