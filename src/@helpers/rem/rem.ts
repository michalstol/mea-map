const BASE_SIZE = 10;

/**
 * Transform `px` -> `rem` based on the `BASE_SIZE` value.
 */
function rem(input: number | string, base: number = BASE_SIZE): string {
    // parsing values into the number
    const inputValue: number = +input;
    const baseValue: number = +base;

    if (isNaN(inputValue)) {
        throw new Error(`Passed input value is incorect: ${input}`);
    }

    if (isNaN(baseValue)) {
        throw new Error(`Passed base value is incorect: ${base}`);
    }

    return `${inputValue / baseValue}rem`;
}

export { BASE_SIZE, rem };
