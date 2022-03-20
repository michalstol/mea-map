import React from 'react';
import { useTheme } from 'styled-components';

import { ZIndexes } from '@typings/customTheme';

interface Props {
    variant: ZIndexes;
    children: React.ReactElement;
}

function ZIndexer(props: Props): React.ReactElement {
    const theme = useTheme();

    return React.cloneElement(props.children, {
        style: { zIndex: theme.zIndexes[props.variant] },
    });
}

export { ZIndexer };
