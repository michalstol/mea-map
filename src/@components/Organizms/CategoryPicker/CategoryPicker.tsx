import React from 'react';
import styled, { useTheme } from 'styled-components';

import { Category } from '@uTypes/categories';
import { QUERY_LOADING_STATE } from '@uTypes/loadingState';

import Grid from '@atoms/Grid';
import { NormalizeList } from '@atoms/NormalizeList';
import { SquareButtonSkeleton } from '@atoms/SquareButton';
import { CategoryPickerButton } from '@molecules/CategoryPickerButton';

interface Props {
    categories: Category[];
    status?: QUERY_LOADING_STATE;
    isAutoScrollEnabled?: boolean;
}

function CategoryPicker(props: Props): React.ReactElement {
    const theme = useTheme();
    const [selected, useSelected] = React.useState<string | null>(null);

    const $list = React.useRef<HTMLUListElement | null>(null);
    const isLoading =
        !props.status ||
        [QUERY_LOADING_STATE.IDLE, QUERY_LOADING_STATE.LOADING].includes(
            props.status
        );

    const onSelect = (uuid: string) => {
        if (!$list.current) return;

        useSelected(selected !== uuid ? uuid : null);

        if (!props.isAutoScrollEnabled) return;

        const index = props.categories.findIndex(
            category => category.uuid === uuid
        );

        $list.current.parentElement?.scroll({
            left:
                $list.current.querySelectorAll('li')[index].offsetLeft -
                $list.current.offsetLeft,
            behavior: 'smooth',
        });
    };

    return (
        <Container>
            <List ref={$list}>
                {isLoading &&
                    Array(5)
                        .fill(null)
                        .map((_, index) => (
                            <li key={index}>
                                <SquareButtonSkeleton />
                            </li>
                        ))}

                {!isLoading &&
                    props.categories.map(category => (
                        <CategoryPickerButton
                            key={category.uuid}
                            uuid={category.uuid}
                            icon={category.icon}
                            isSelected={category.uuid === selected}
                            onSelect={onSelect}
                        />
                    ))}
            </List>
        </Container>
    );
}

export { CategoryPicker };

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
