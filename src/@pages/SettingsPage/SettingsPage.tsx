import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@configs/routes';

import { Page } from '@ui/Organisms/Page';

function SettingsPage(): React.ReactElement {
    return (
        <Page>
            <h1>Settings Page</h1>
            <ul>
                <li>
                    <Link to={ROUTES.HOME_PAGE}>HP</Link>
                </li>
            </ul>
        </Page>
    );
}

export { SettingsPage };
