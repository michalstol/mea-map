import React from 'react';
import styled, { css, useTheme } from 'styled-components';

import { useAuth } from '@hooks/useAuth';

import { Page } from '@atoms/Page';

import { GoogleAuth } from '@features/GoogleAuth';
import { CategoriesFilter } from '@features/CategoriesFilter';

interface Props {
    testId?: string;
    onShowMenu: () => void;
}

function MapPage(props: Props): React.ReactElement {
    const { user } = useAuth();

    return (
        <PageWrapper
            style={{
                background:
                    'url("https://i.stack.imgur.com/k0akf.png") 100% 100%',
            }}
        >
            <header></header>
            <div onClick={props.onShowMenu}>asd</div>

            {/* position button */}
            <div></div>

            {/* footer with GoogleAuth or CategoriesFilter */}
            <Footer>
                {!user && <GoogleAuth />}
                {!!user && <CategoriesFilter />}
            </Footer>
        </PageWrapper>
    );
}

export { MapPage };

const PageWrapper = styled(Page)`
    display: grid;
    grid-template-rows: auto 1fr auto auto;
`;

const Footer = styled.footer`
    padding-bottom: ${props => props.theme.sizes.base_x5};
    overflow: hidden;
`;
