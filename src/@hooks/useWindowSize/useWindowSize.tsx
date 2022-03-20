import React from 'react';
import { debounce } from 'throttle-debounce';

function useWindowSize() {
    const [windowSize, setWindowSize] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    React.useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', debounce(100, handleResize));

        return () =>
            window.removeEventListener('resize', debounce(100, handleResize));
    }, []);
    return windowSize;
}

export { useWindowSize };
