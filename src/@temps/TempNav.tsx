import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ROUTES } from '@configs/routes';

import { buildUrl } from '@helpers/buildUrl';

function TempNav(): React.ReactElement {
    return (
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
                        .setQuery('location', 'asd-2313asd-23asda-323asd-23')
                        .done()}
                >
                    Location
                </Link>
            </El>
        </List>
    );
}

export { TempNav };

const List = styled.ul`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    z-index: ${props => props.theme.zIndexes.page + 100};
`;

const El = styled.li``;
