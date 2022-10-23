import React from 'react';
import styled from 'styled-components';

interface Props {
    children: React.ReactNode;
}

function Normalize(props: Props): React.ReactElement {
    return <StyledList>{props.children}</StyledList>;
}

export { Normalize };

const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;
