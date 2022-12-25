import React from 'react';
import styled, { useTheme } from 'styled-components';

import Pallete from '@styles/Theme/pallete';

import { ICON_NAME } from '../../../@types/icons';

import { Icon } from '@atoms/Icon';
import { Ellipsis } from '@atoms/Ellipsis';

export interface Props {
    title: string;
    description: string;
    icon: ICON_NAME;
    color?: string;
    bgColor?: string;
}

function InfoLabelComponent({
    color = Pallete.white,
    bgColor = Pallete.gray_E7,
    ...props
}: Props): React.ReactElement {
    const theme = useTheme();

    return (
        <Container>
            <IconWrapper color={color} bgColor={bgColor}>
                <Icon size={theme.icons.sizes.tiny}>{props.icon}</Icon>
            </IconWrapper>

            <Content>
                <Ellipsis>{props.title}</Ellipsis>
                <Description>{props.description}</Description>
            </Content>
        </Container>
    );
}

const InfoLabel = React.memo(InfoLabelComponent);
InfoLabel.displayName = 'InfoLabel';

export { InfoLabel };

const Container = styled.div`
    --mea-info-label-size: ${props => props.theme.sizes.base_x4_5};
    --mea-info-label-gap: ${props => props.theme.sizes.base};

    position: relative;
    padding-left: calc(var(--mea-info-label-size) + var(--mea-info-label-gap));
`;

const IconWrapper = styled.div<{ color: string; bgColor: string }>`
    position: absolute;
    left: 0;
    top: calc(50% - var(--mea-info-label-size) / 2);
    width: var(--mea-info-label-size);
    height: var(--mea-info-label-size);
    color: rgb(${props => props.color});
    border-radius: 100%;
    background-color: rgb(${props => props.bgColor});
    display: grid;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    font-size: ${props => props.theme.fonts.size.caption};
    line-height: ${props => props.theme.fonts.lineHeight.caption};
    color: rgb(${props => props.theme.pallete.gray_82});
`;

const Description = styled(Ellipsis)`
    font-weight: ${props => props.theme.fonts.weight.semibold};
`;
