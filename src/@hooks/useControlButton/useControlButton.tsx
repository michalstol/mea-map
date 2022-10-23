import React from 'react';

export enum CONTROL_BUTTON_STATES {
    MENU = 'MENU',
    BACK = 'BACK',
    CLOSE = 'CLOSE',
    HIDE = 'HIDE',
}

interface ControlButtonProps {
    state: CONTROL_BUTTON_STATES;
    setState: React.Dispatch<React.SetStateAction<CONTROL_BUTTON_STATES>>;
    reset: () => void;
    ref?: React.MutableRefObject<HTMLButtonElement | null>;
}

const initialState: ControlButtonProps = {
    state: CONTROL_BUTTON_STATES.MENU,
    setState: () => {},
    reset: () => {},
};

const ControlButtonContext =
    React.createContext<ControlButtonProps>(initialState);

interface ControlButtonProviderProps {
    children: React.ReactNode;
}

function ControlButtonProvider(
    props: ControlButtonProviderProps
): React.ReactElement {
    const ref = React.useRef<HTMLButtonElement | null>(null);
    const [state, setState] = React.useState<CONTROL_BUTTON_STATES>(
        initialState.state
    );
    const reset = () => {
        setState(initialState.state);
    };

    return (
        <ControlButtonContext.Provider value={{ state, setState, reset, ref }}>
            {props.children}
        </ControlButtonContext.Provider>
    );
}

function useControlButton() {
    const context = React.useContext(ControlButtonContext);

    return { ...context };
}

export { ControlButtonProvider, useControlButton };
