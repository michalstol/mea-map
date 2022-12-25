/**
 * Components - Menu link
 * https://www.figma.com/file/BzyHNY0jXD878B0jEtPeTA/Mea-Map?node-id=41%3A839&t=wIXBZAMpY9J5L6sI-1
 */

import React from 'react';
import styled, { useTheme } from 'styled-components';

import { ICON_NAME } from '@typings/icons';
import { ROUTES } from '@typings/routing';

import { Icon } from '@atoms/Icon';

interface Props {
    className?: string;
    icon: ICON_NAME;
    href: ROUTES;
    children: React.ReactNode;
    onClick: (path: ROUTES) => void;
}

function MenuLink(props: Props): React.ReactElement {
    const theme = useTheme();
    const onClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        props.onClick(props.href);
    };

    return (
        <Link className={props.className} href={props.href} onClick={onClick}>
            <IconWrapper>
                <Icon as="span" size={theme.icons.sizes.small}>
                    {props.icon}
                </Icon>
            </IconWrapper>

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
