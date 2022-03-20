import { STORAGE_FACADE_PREFIX } from '@configs/const';
import { GenericObject } from '@typings/genericObject';

enum STORAGE_NAMES {
    AUTH = 'AUTH',
}

function setItem(key: STORAGE_NAMES, value: GenericObject): void {
    localStorage?.setItem(
        `${STORAGE_FACADE_PREFIX}${key}`,
        JSON.stringify({
            ...value,
            appVersion: process.env.REACT_APP_APP_VERSION,
        })
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

    localStorage?.removeItem(`${STORAGE_FACADE_PREFIX}${key}`);

    return true;
}

/**
 * Function handle moment when saved items have not supported app version.
 */
function checkSupportedVersion(): void {
    const supportedVersion = +String(
        process.env.REACT_APP_STORAGE_FACADE_SUPPORTED_APP_VERSION || 0
    ).replaceAll('.', '');

    Object.values(STORAGE_NAMES).map((value: STORAGE_NAMES): void => {
        const itemVersion = +String(getItem(value)?.appVersion || 0).replaceAll(
            '.',
            ''
        );

        if (itemVersion < supportedVersion) {
            console.warn('CLEARED STORAGE ITEM', {
                value,
                itemVersion,
                supportedVersion,
            });
            deleteItem(value);
        }
    });
}

const storageFacade = (() => {
    checkSupportedVersion();

    return {
        set: setItem,
        get: getItem,
        delete: deleteItem,
    };
})();

export { STORAGE_NAMES, storageFacade };
