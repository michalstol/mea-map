import { STORAGE_FACADE_PREFIX } from '@configs/const';
import { GenericObject } from '../@types/genericObject';
import { STORAGE_NAMES } from '../@types/storage';

function setItem<T = GenericObject>(key: STORAGE_NAMES, value: T): void {
    localStorage?.setItem(
        `${STORAGE_FACADE_PREFIX}${key}`,
        JSON.stringify({
            ...value,
        })
    );
}

function getItem<T = GenericObject>(key: STORAGE_NAMES): T | undefined {
    const item = localStorage?.getItem(`${STORAGE_FACADE_PREFIX}${key}`);

    if (!item) {
        return;
    }

    return JSON.parse(item) as T;
}

function deleteItem(key: STORAGE_NAMES): boolean {
    if (!getItem(key) || !localStorage) {
        return false;
    }

    localStorage?.removeItem(`${STORAGE_FACADE_PREFIX}${key}`);

    return true;
}

const storageFacade = (() => {
    return {
        set: setItem,
        get: getItem,
        delete: deleteItem,
    };
})();

export { storageFacade };
