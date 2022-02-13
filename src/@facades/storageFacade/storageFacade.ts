import { STORAGE_FACADE_PREFIX } from '@configs/const';
import { GenericObject } from '@typings/genericObject';

enum STORAGE_NAMES {
    AUTH = 'AUTH',
}

function setItem(key: STORAGE_NAMES, value: GenericObject): void {
    localStorage?.setItem(
        `${STORAGE_FACADE_PREFIX}${key}`,
        JSON.stringify(value)
    );
}

function getItem<T = GenericObject>(key: STORAGE_NAMES): T | undefined {
    const item = localStorage?.getItem(`${STORAGE_FACADE_PREFIX}${key}`);

    if (!item) {
        return;
    }

    return JSON.parse(item) as unknown as T;
}

function deleteItem(key: STORAGE_NAMES): boolean {
    if (!getItem(key) || !localStorage) {
        return false;
    }

    localStorage.removeItem(`${STORAGE_FACADE_PREFIX}${key}`);

    return true;
}

const storageFacade = {
    set: setItem,
    get: getItem,
    delete: deleteItem,
};

export { STORAGE_NAMES, storageFacade };
