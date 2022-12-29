import React from 'react';

import { CATEGORIES_ICON_NAME } from '@uTypes/icons';

import { ReactComponent as HeartIcon } from '@svg/iconic/heart.svg';
import { ReactComponent as HomeIcon } from '@svg/iconic/home.svg';
import { ReactComponent as BriefcaseIcon } from '@svg/iconic/briefcase.svg';
import { ReactComponent as UsersIcon } from '@svg/iconic/users.svg';
import { ReactComponent as ShoppingCartIcon } from '@svg/iconic/shopping-cart.svg';

// DEFAULT
import { ReactComponent as PinIcon } from '@svg/iconic/pin.svg';

const icons = {
    [CATEGORIES_ICON_NAME.FAVORITE]: HeartIcon,
    [CATEGORIES_ICON_NAME.HOME]: HomeIcon,
    [CATEGORIES_ICON_NAME.OFFICE]: BriefcaseIcon,
    [CATEGORIES_ICON_NAME.FRIENDS]: UsersIcon,
    [CATEGORIES_ICON_NAME.SHOPS]: ShoppingCartIcon,
    default: PinIcon,
};

function iconFacade(
    name: CATEGORIES_ICON_NAME
): React.FunctionComponent<React.SVGProps<SVGSVGElement>> {
    return icons[name] || icons.default;
}

export { iconFacade };
