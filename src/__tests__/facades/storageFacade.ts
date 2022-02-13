import { STORAGE_FACADE_PREFIX } from '@configs/const';
import { STORAGE_NAMES, storageFacade } from '@facades/storageFacade';

import { GenericObject } from '@typings/genericObject';

const tempObj = { test: true };

describe('storageFacade test', () => {
    beforeAll(() => {
        const localStorageMock = (function () {
            let store: GenericObject = {};

            return {
                getItem: function (key: string) {
                    return store[key];
                },
                setItem: function (key: string, value: string) {
                    store[key] = value;
                },
                removeItem: function (key: string) {
                    delete store[key];
                },
                clear: function () {
                    store = {};
                },
            };
        })();

        Object.defineProperty(window, 'localStorage', {
            value: localStorageMock,
        });
    });

    beforeEach(() => {
        window.localStorage.clear();
    });

    it('check if storageFacade can set item', () => {
        storageFacade.set(STORAGE_NAMES.AUTH, tempObj);

        const value =
            window.localStorage.getItem(
                `${STORAGE_FACADE_PREFIX}${STORAGE_NAMES.AUTH}`
            ) || '';

        expect(JSON.parse(value)).toStrictEqual(tempObj);
    });

    it('check if storageFacade can get item', () => {
        window.localStorage.setItem(
            `${STORAGE_FACADE_PREFIX}${STORAGE_NAMES.AUTH}`,
            JSON.stringify(tempObj)
        );

        expect(storageFacade.get(STORAGE_NAMES.AUTH)).toStrictEqual(tempObj);
    });

    it('check if storageFacade can delete item', () => {
        expect(storageFacade.delete(STORAGE_NAMES.AUTH)).toBeFalsy();

        window.localStorage.setItem(
            `${STORAGE_FACADE_PREFIX}${STORAGE_NAMES.AUTH}`,
            JSON.stringify(tempObj)
        );

        expect(storageFacade.delete(STORAGE_NAMES.AUTH)).toBeTruthy();
        expect(
            window.localStorage.getItem(
                `${STORAGE_FACADE_PREFIX}${STORAGE_NAMES.AUTH}`
            )
        ).toBe(undefined);
    });
});
