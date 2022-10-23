import React from 'react';
import styled from 'styled-components';

import { getCase } from '@helpers/getCase';

import {
    useControlButton,
    CONTROL_BUTTON_STATES,
} from '@hooks/useControlButton';

type MappedStates = {
    [key in CONTROL_BUTTON_STATES]: string;
};

const mappedStates: MappedStates = {
    [CONTROL_BUTTON_STATES.MENU]: 'menu',
    [CONTROL_BUTTON_STATES.BACK]: 'back',
    [CONTROL_BUTTON_STATES.CLOSE]: 'close',
    [CONTROL_BUTTON_STATES.HIDE]: '',
};

function ControlButtonComponent(): React.ReactElement {
    const { state, ref } = useControlButton();
    const icon = React.useCallback(
        () =>
            getCase<string>(state, {
                ...mappedStates,
                default: mappedStates.MENU,
            }),
        [state]
    );

    return (
        <Button ref={ref} type="button" className="material-symbols-outlined">
            {icon()}
        </Button>
    );
}

const ControlButton = React.memo(ControlButtonComponent);
ControlButton.displayName = 'ControlButton';

export { ControlButton };

const Button = styled.button``;
