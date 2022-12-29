import React from 'react';
import { useTheme } from 'styled-components';

import { Category } from '@uTypes/categories';

import { getIconSize } from '@helpers/getIconSize';

import { SquareButton } from '@atoms/SquareButton';

import { iconFacade } from '@facades/iconFacade';

interface Props {
    uuid: Category['uuid'];
    icon: Category['icon'];
    isSelected: boolean;
    onSelect: (uuid: string) => void;
}

function CategoryPickerButton(props: Props): React.ReactElement {
    const theme = useTheme();
    const Icon = iconFacade(props.icon);

    return (
        <li key={props.uuid}>
            <SquareButton
                version={props.isSelected ? 'primary' : 'secondary'}
                onClick={() => props.onSelect(props.uuid!)}
            >
                <Icon style={getIconSize(theme, 'normal')} />
            </SquareButton>
        </li>
    );
}

export { CategoryPickerButton };
