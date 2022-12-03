import React from 'react';
import styled from 'styled-components';

import { Ellipsis } from '@atoms/Ellipsis';

interface Props {
    heading: string;
    fullAddress: string;
}

function LocationHeadingComponent(props: Props): React.ReactElement {
    return (
        <div>
            <Heading>{props.heading}</Heading>
            <FullAddress>{props.fullAddress}</FullAddress>
        </div>
    );
}

const LocationHeading = React.memo(LocationHeadingComponent);
LocationHeading.displayName = 'LocationHeading';

export { LocationHeading };

const Heading = styled(Ellipsis)`
    font-size: ${props => props.theme.fonts.size.heading};
    font-weight: ${props => props.theme.fonts.weight.regular};
    line-height: ${props => props.theme.fonts.lineHeight.heading};
`;

const FullAddress = styled.div`
    margin-top: ${props => props.theme.sizes.half};
    font-size: ${props => props.theme.fonts.size.caption};
    font-weight: ${props => props.theme.fonts.weight.light};
    line-height: ${props => props.theme.fonts.lineHeight.caption};
    color: rgb(${props => props.theme.pallete.gray_82});
`;
