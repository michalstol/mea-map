import React from 'react';
import styled, { css } from 'styled-components';

const duration = 500;

interface Props {
    children: React.ReactNode;
}

function Page(props: Props): React.ReactElement {
    const [isReady, setIsReady] = React.useState(false);

    React.useEffect(() => {
        const initPage = setTimeout(() => setIsReady(true), duration);

        return () => clearTimeout(initPage);
    }, []);

    return <Container isReady={isReady}>{props.children}</Container>;
}

export { Page };

const Container = styled.div<{ isReady: boolean }>`
    /* TODO: replace this animation by framer-motion */
    @keyframes openPageAnimation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.colors.white};
    overflow: auto;
    z-index: ${props => props.theme.zIndexes.page};
    animation: openPageAnimation ${duration}ms ease-in;

    ${props =>
        props.isReady &&
        css`
            opacity: 1;
        `}
`;
