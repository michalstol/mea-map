/**
 * Components - Profile
 * https://www.figma.com/file/BzyHNY0jXD878B0jEtPeTA/Mea-Map?node-id=41%3A778&t=wIXBZAMpY9J5L6sI-1
 */

import React from 'react';
import styled from 'styled-components';

import { Ellipsis } from '@atoms/Ellipsis';

interface Props {
    testId?: string;
    className?: string;
    src: string;
    name: string;
    email: string;
}

function AvatarComponent(props: Props): React.ReactElement {
    return (
        <Container className={props.className} data-testid={props.testId}>
            <ImgWrapper>
                <Img src={props.src} />
            </ImgWrapper>

            <Content>
                <Name>{props.name}</Name>

                <Ellipsis>{props.email}</Ellipsis>
            </Content>
        </Container>
    );
}

const Avatar = React.memo(AvatarComponent);
Avatar.displayName = 'Avatar';

export { Avatar };

const Container = styled.div`
    --mea-avatar-img-size: ${props => props.theme.sizes.base_x8};

    position: relative;
    min-height: var(--mea-avatar-img-size);
    padding-left: calc(
        var(--mea-avatar-img-size) + ${props => props.theme.sizes.base}
    );
`;

const ImgWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    width: var(--mea-avatar-img-size);
    height: var(--mea-avatar-img-size);
    border-radius: 100%;
    overflow: hidden;
    transform: translate(0, -50%);
`;

const Img = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
`;

const Content = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Name = styled.div`
    font-size: ${props => props.theme.fonts.size.headingSmall};
    font-weight: ${props => props.theme.fonts.weight.semibold};
    line-height: ${props => props.theme.fonts.lineHeight.headingSmall};
`;
