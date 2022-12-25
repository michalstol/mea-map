import React from 'react';
import styled, { css, useTheme } from 'styled-components';

import { Page } from '@atoms/Page';

import { GoogleAuth } from '@features/GoogleAuth';

interface Props {
    testId?: string;
    onShowMenu: () => void;
}

function MapPage(props: Props): React.ReactElement {
    return (
        <Page>
            <div onClick={props.onShowMenu}>
                asd
                <GoogleAuth />
            </div>
        </Page>
    );
}

export { MapPage };
