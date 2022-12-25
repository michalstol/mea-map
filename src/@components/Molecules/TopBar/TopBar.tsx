import React from 'react';
import styled, { css, useTheme } from 'styled-components';

import Grid from '@atoms/Grid';
import { Field, Input } from '@atoms/Field';
import { Icon } from '@atoms/Icon';
import { ICON_NAME } from '@uTypes/icons';
import { rem } from '@styles/helpers';

enum TOP_BAR_VARIANTS {
    DEFAULT = 'DEFAULT',
    SEARCHING = 'SEARCHING',
    SEARCHED = 'SEARCHED',
}

interface Props {
    testId?: string;
    className?: string;
    variant: TOP_BAR_VARIANTS;
    value?: string;
    children?: React.ReactNode;
    onFocus: () => void;
    onBlur: () => void;
    onChange: (value: string) => void;
    onLeftButtonClick: () => void;
    onRithButtonClick: () => void;
}

/**
 * @param variant: Variants => default value "default"
 */
function TopBar(props: Props): React.ReactElement {
    const theme = useTheme();

    const iconVariants: {
        [key in TOP_BAR_VARIANTS]: {
            name: ICON_NAME;
            size: string;
            weight?: number;
        };
    } = {
        [TOP_BAR_VARIANTS.DEFAULT]: {
            name: ICON_NAME.NOTES,
            size: theme.icons.sizes.normal,
        },
        [TOP_BAR_VARIANTS.SEARCHING]: {
            name: ICON_NAME.ARROW_BACK,
            size: theme.icons.sizes.small,
            weight: theme.icons.weight.bold,
        },
        [TOP_BAR_VARIANTS.SEARCHED]: {
            name: ICON_NAME.CLOSE,
            size: theme.icons.sizes.small,
            weight: theme.icons.weight.bold,
        },
    };

    const getIconVariant = React.useCallback(
        () =>
            iconVariants[props.variant] ||
            iconVariants[TOP_BAR_VARIANTS.DEFAULT],
        [props.variant]
    );

    return (
        <Grid.Container as="header" variant="no-padding">
            <Container variant={props.variant}>
                <Grid.Row columns={1}>
                    <Grid.Cell>
                        <Box variant={props.variant}>
                            <Button>
                                <Icon
                                    size={getIconVariant().size}
                                    weight={getIconVariant().weight}
                                >
                                    {getIconVariant().name}
                                </Icon>
                            </Button>

                            <StyledField name="top-bar">
                                <Input placeholder="Search Location" />
                            </StyledField>

                            {[TOP_BAR_VARIANTS.SEARCHING].includes(
                                props.variant
                            ) && (
                                <Button>
                                    <Icon
                                        size={theme.icons.sizes.small}
                                        weight={theme.icons.weight.bold}
                                    >
                                        {ICON_NAME.SEARCH}
                                    </Icon>
                                </Button>
                            )}
                        </Box>
                    </Grid.Cell>
                </Grid.Row>

                {!!props.children && (
                    <Grid.Row columns={1}>
                        <Grid.Cell>{props.children}</Grid.Cell>
                    </Grid.Row>
                )}
            </Container>
        </Grid.Container>
    );
}

export { TOP_BAR_VARIANTS, TopBar };

const Container = styled.div<{
    variant: TOP_BAR_VARIANTS;
}>`
    --mea-top-bar-height: ${rem(56)};

    padding: var(--mea-grid-padding);
    filter: drop-shadow(${props => props.theme.shadows.normal});

    ${props =>
        [TOP_BAR_VARIANTS.SEARCHING].includes(props.variant) &&
        css`
            filter: none;
        `}
`;

const Box = styled.div<{ variant: TOP_BAR_VARIANTS }>`
    height: var(--mea-top-bar-height);
    background-color: transparent;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: ${props => props.theme.sizes.base_x2_5};

    ${props =>
        [TOP_BAR_VARIANTS.SEARCHING].includes(props.variant) &&
        css`
            border: 1px solid rgb(${props => props.theme.pallete.gray_E7});
            border-radius: calc(var(--mea-top-bar-height) / 2);
            overflow: hidden;
            grid-template-columns: auto 1fr auto;
        `}
`;

const StyledField = styled(Field)`
    --mea-field-margin: 0;
    --mea-field-border: none;

    > * {
        max-height: var(--mea-top-bar-height);
    }
`;

const Button = styled.button`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    aspect-ratio: 1;
    color: rgb(${props => props.theme.pallete.black});
    border: none;
    border-radius: 100%;
    background-color: rgb(${props => props.theme.pallete.white});

    ${Icon} {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }
`;
