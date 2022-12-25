import React from 'react';
import styled, { useTheme } from 'styled-components';

import Grid from '@atoms/Grid';
import { SquareButton } from '@atoms/SquareButton';
import { LocationHeading } from '@atoms/LocationHeading';
import { InfoLabel, Props as InfoLabelProps } from '@atoms/InfoLabel';
import { Icon } from '@atoms/Icon';
import { theme } from '@styles/Theme';
import { ICON_NAME } from '../../../@types/icons';

interface Props {
    icon: ICON_NAME.ADD | ICON_NAME.NAVIGATION;
    name: string;
    address: string;
    description?: string;
    extras?: InfoLabelProps[];
    onAction: () => void;
}

function LocationDetailsComponent(props: Props): React.ReactElement {
    const getExtras = React.useCallback((): {
        [key: string]: InfoLabelProps[];
    } => {
        if (!props.extras || !props.extras.length) {
            return {};
        }

        const data: { [key: string]: InfoLabelProps[] } = {};
        const iterator = {
            row: 0,
            cell: 0,
        };

        for (const extras of props.extras) {
            if (!data[iterator.row]) {
                data[iterator.row] = [];
            }

            data[iterator.row].push(extras);

            iterator.cell = iterator.cell + 1;

            if (iterator.cell === 2) {
                iterator.row = iterator.row + 1;
                iterator.cell = 0;
            }
        }

        return data;
    }, [props.extras]);

    return (
        <Container>
            <Grid.Row columns={1}>
                <Grid.Cell>
                    <LocationTop>
                        <LocationHeading
                            heading={props.name}
                            fullAddress={props.address}
                        />

                        <StyledButton>
                            <Icon size={theme.icons.sizes.normal}>
                                {props.icon}
                            </Icon>
                        </StyledButton>
                    </LocationTop>
                </Grid.Cell>
            </Grid.Row>

            {!!props.description && (
                <Grid.Row columns={1}>
                    <Grid.Cell>
                        <Description>{props.description}</Description>
                    </Grid.Cell>
                </Grid.Row>
            )}

            {!!props.extras &&
                !!props.extras.length &&
                Object.values(getExtras()).map((row, index) => (
                    <Grid.Row key={index}>
                        {row.map((extras, extrasIndex) => (
                            <Grid.Cell key={extrasIndex}>
                                <InfoLabel {...extras} />
                            </Grid.Cell>
                        ))}
                    </Grid.Row>
                ))}
        </Container>
    );
}

const LocationDetails = React.memo(LocationDetailsComponent);
LocationDetails.displayName = 'LocationDetails';

export { LocationDetails };

const Container = styled(Grid.Container)`
    display: grid;
    gap: var(--mea-grid-gap);
`;

const LocationTop = styled.div`
    position: relative;
    padding-right: calc(
        ${props => props.theme.sizes.base_x8} +
            ${props => props.theme.sizes.base_x2_5}
    );
`;

const StyledButton = styled(SquareButton)`
    position: absolute;
    top: 0;
    right: 0;
`;

const Description = styled.div`
    font-size: ${props => props.theme.fonts.size.bodySmall};
    line-height: ${props => props.theme.fonts.lineHeight.bodySmall};
`;
