import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
    testId?: string;
    onShowMenu: () => void;
}

function MapPage(props: Props): React.ReactElement {
    return <div onClick={props.onShowMenu}>ASD</div>;
}

export { MapPage };
