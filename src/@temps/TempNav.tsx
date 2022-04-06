import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ROUTES } from '@configs/routes';

import { buildUrl } from '@helpers/buildUrl';

import { GoogleAuth } from '@ui/Molecules/GoogleAuth';

function TempNav(): React.ReactElement {
    return (
        <Container>
            <GoogleAuth />

            <List>
                <El>
                    <Link to={ROUTES.HOME_PAGE}>Home Page</Link>
                </El>
                <El>
                    <Link to={ROUTES.MY_LOCATIONS}>My Locations</Link>
                </El>
                <El>
                    <Link to={ROUTES.HISTORY}>History</Link>
                </El>
                <El>
                    <Link to={ROUTES.SETTINGS}>Settings</Link>
                </El>
                <El>
                    <Link
                        to={buildUrl(ROUTES.LOCATION)
                            .setQuery(
                                'location',
                                'asd-2313asd-23asda-323asd-23'
                            )
                            .done()}
                    >
                        Location
                    </Link>
                </El>
            </List>
        </Container>
    );
}

export { TempNav };

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: ${props => props.theme.zIndexes.page + 100};
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
`;

const El = styled.li``;
