import React from 'react';

interface WindowSizes {
    width: number;
    height: number;
}

// maybe `window.visualViewport` is better
function getWindowSizes(): WindowSizes {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
    };
}

const initWindowSizes: WindowSizes = getWindowSizes();

interface WindowContextProps extends WindowSizes {}

const WindowContext = React.createContext<WindowContextProps>({
    ...initWindowSizes,
});

interface WindowProviderProps {
    children: React.ReactNode;
}

function WindowProvider(props: WindowProviderProps): React.ReactElement {
    const [width, setWidth] = React.useState(() => initWindowSizes.width);
    const [height, setHeight] = React.useState(() => initWindowSizes.height);

    React.useEffect(() => {
        const change = () => {
            const newSizes = getWindowSizes();

            // change window sizes only when user change orientation
            // if user open keyboard then sizes mast stay the same
            if (newSizes.width === width) return;

            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', change);
        return () => window.removeEventListener('resize', change);
    }, [width]);

    return (
        <WindowContext.Provider
            value={{
                width,
                height,
            }}
        >
            {props.children}
        </WindowContext.Provider>
    );
}

function useWindow(): WindowContextProps {
    const context = React.useContext(WindowContext);

    return { ...context };
}

export { WindowProvider, useWindow };
