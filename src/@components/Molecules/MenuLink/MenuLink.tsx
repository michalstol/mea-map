/**
 * Components - Menu link
 * https://www.figma.com/file/BzyHNY0jXD878B0jEtPeTA/Mea-Map?node-id=41%3A839&t=wIXBZAMpY9J5L6sI-1
 */

import React from 'react';
import styled from 'styled-components';

import { ROUTES } from '@uTypes/routing';

interface Props<T = ROUTES> {
    className?: string;
    icon: React.ReactElement;
    href: T;
    children: React.ReactNode;
    onClick: (path: T) => void;
}

function MenuLink<T = ROUTES>(props: Props<T>): React.ReactElement {
    const onClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        props.onClick(props.href);
    };

    return (
        <Link
            className={props.className}
            href={props.href as string}
            onClick={onClick}
        >
            <IconWrapper>{props.icon}</IconWrapper>

            <span>{props.children}</span>
        </Link>
    );
}

const Link = styled.a`
    font-size: ${props => props.theme.fonts.size.headingSmall};
    line-height: ${props => props.theme.fonts.lineHeight.headingSmall};
    display: flex;
    align-items: flex-start;
    gap: ${props => props.theme.sizes.base_x2};
`;

const IconWrapper = styled.span`
    height: ${props => props.theme.fonts.lineHeight.headingSmall};
    flex: 0 0 auto;
    display: flex;
    align-items: center;
`;

export { MenuLink };
