import React from 'react';
import styled from 'styled-components';

import { hexToRgb } from '@helpers/hexToRgb';

import { ZIndexer } from '@ui/Atoms/ZIndexer';

function HomePage(): React.ReactElement {
    const [visibleMenu, setVisibleMenu] = React.useState(false);

    return (
        <div>
            <ZIndexer variant="menu">
                <Layer>MENU</Layer>
            </ZIndexer>

            <ZIndexer variant="map">
                <Layer>
                    <br />
                    MAP
                </Layer>
            </ZIndexer>

            <ZIndexer variant="markers">
                <Layer>
                    <br />
                    <br />
                    MARKERS
                </Layer>
            </ZIndexer>

            <ZIndexer variant="navigation">
                <Layer>
                    <br />
                    <br />
                    <br />
                    NAVIGATION
                </Layer>
            </ZIndexer>
        </div>
    );
}

export { HomePage };

const Layer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(${props => hexToRgb(props.theme.colors.white)}, 0.3);
`;
