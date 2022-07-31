import React from 'react';

export enum CONTROL_BUTTON_STATES {
    MENU = 'MENU',
    CLOSE = 'CLOSE',
    HIDE = 'HIDE',
}

interface ControlButtonProps {
    state: CONTROL_BUTTON_STATES;
    onClick: () => void;
    setState: React.Dispatch<React.SetStateAction<CONTROL_BUTTON_STATES>>;
    setOnClick: React.Dispatch<React.SetStateAction<() => void>>;
}

const initialState: ControlButtonProps = {
    state: CONTROL_BUTTON_STATES.MENU,
    onClick: () => {},
    setState: () => {},
    setOnClick: () => {},
};

const ControlButtonContext =
    React.createContext<ControlButtonProps>(initialState);

interface ControlButtonProviderProps {
    children: React.ReactNode;
}

function ControlButtonProvider(
    props: ControlButtonProviderProps
): React.ReactElement {
    const [state, setState] = React.useState<CONTROL_BUTTON_STATES>(
        initialState.state
    );
    const [onClick, setOnClick] = React.useState<() => void>(
        () => initialState.onClick
    );

    return (
        <ControlButtonContext.Provider
            value={{ state, setState, onClick, setOnClick }}
        >
            {props.children}
        </ControlButtonContext.Provider>
    );
}

function useControlButton() {
    const context = React.useContext(ControlButtonContext);

    return { ...context };
}

export { ControlButtonProvider, useControlButton };
