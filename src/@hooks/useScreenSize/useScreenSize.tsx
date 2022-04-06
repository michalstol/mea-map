import React from 'react';
import { debounce } from 'throttle-debounce';

function useScreenSize() {
    const [size, setSize] = React.useState({
        width: window.screen.width,
        height: window.screen.height,
    });

    React.useEffect(() => {
        function handleResize() {
            setSize({
                width: window.screen.width,
                height: window.screen.height,
            });
        }

        window.addEventListener('resize', debounce(100, handleResize));

        return () =>
            window.removeEventListener('resize', debounce(100, handleResize));
    }, []);

    return size;
}

export { useScreenSize };
