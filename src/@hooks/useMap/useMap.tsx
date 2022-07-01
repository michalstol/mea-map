import React from 'react';
import { LngLat } from 'mapbox-gl';

export interface MapContextProps {
    pointed: LngLat | null;
    setPointed: React.Dispatch<React.SetStateAction<LngLat | null>>;
}

const initialState: MapContextProps = {
    pointed: null,
    setPointed: () => {},
};

const MapContext = React.createContext<MapContextProps>(initialState);

interface MapProviderProps {
    children: React.ReactNode;
}

function MapProvider(props: MapProviderProps): React.ReactElement {
    const [pointed, setPointed] = React.useState<LngLat | null>(
        initialState.pointed
    );

    return (
        <MapContext.Provider value={{ pointed, setPointed }}>
            {props.children}
        </MapContext.Provider>
    );
}

function useMap(): MapContextProps {
    const context = React.useContext(MapContext);

    return { ...context };
}

export { MapProvider, useMap };
