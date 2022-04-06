import React from 'react';

import { useScreenSize } from '@hooks/useScreenSize';

interface Props {
    width?: boolean;
    height?: boolean;
    className?: string;
    children: React.ReactNode;
}

function ScreenLayer(props: Props): React.ReactElement {
    const { width, height } = useScreenSize();

    return (
        <div
            className={props.className}
            style={{
                ...(props.width && { width }),
                ...(props.height && { height }),
            }}
        >
            {props.children}
        </div>
    );
}

export { ScreenLayer };
