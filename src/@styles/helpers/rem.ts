import { defaultFontSize } from '@configs/const';

function rem(value: number): string {
    return value / defaultFontSize + 'rem';
}

export { rem };
