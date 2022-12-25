import React from 'react';
import styled, { css, useTheme } from 'styled-components';

import { useAuth } from '@hooks/useAuth';

import { ReactComponent as GridIcon } from '@svg/iconic/grid.svg';

import Grid from '@atoms/Grid';
import { NormalizeList } from '@atoms/NormalizeList';
import { SquareButton } from '@atoms/SquareButton';
import { getIconSize } from '@helpers/getIconSize';

function CategoriesFilter(): React.ReactElement | null {
    const theme = useTheme();
    const { user } = useAuth();

    const [selected, useSelected] = React.useState(() => {
        // find favorite category ID
        return 'asd';
    });

    const $list = React.useRef<HTMLUListElement | null>(null);

    const onSelect = (id: string, index: number) => {
        if (!$list.current) return;
        if (selected === id) return;

        useSelected(id);
        $list.current.parentElement?.scroll({
            left:
                $list.current.querySelectorAll('li')[index].offsetLeft -
                $list.current.offsetLeft,
            behavior: 'smooth',
        });
    };

    if (!user) {
        return null;
    }

    return (
        <Container>
            <List ref={$list}>
                {[
                    'asd',
                    'qwe',
                    'wer',
                    'ert',
                    'rty',
                    'tyu',
                    'yui',
                    'uio',
                    'sdf',
                    'dfg',
                    'fgh',
                ].map((el, i) => (
                    <li key={i}>
                        <SquareButton
                            version={selected === el ? 'primary' : 'secondary'}
                            onClick={() => onSelect(el, i)}
                        >
                            <GridIcon style={getIconSize(theme, 'normal')} />
                        </SquareButton>
                    </li>
                ))}
            </List>
        </Container>
    );
}

export { CategoriesFilter };

const Container = styled(Grid.Container)`
    max-width: 100%;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    scroll-padding-left: var(--mea-grid-padding);
    overflow: hidden;
    overflow-x: visible;
    display: grid;
`;

const List = styled(NormalizeList)`
    display: flex;
    gap: ${props => props.theme.sizes.base_x2};

    // TODO: add animation on init

    li {
        flex: 0 0 auto;
        scroll-snap-align: start;

        &:last-child {
            scroll-snap-align: end;
        }
    }
`;
