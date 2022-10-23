export enum SEARCH_FIELDS {
    SEARCH = 'SEARCH',
}

export interface SearchFormFields {
    [SEARCH_FIELDS.SEARCH]: string;
}

const initValues: SearchFormFields = {
    [SEARCH_FIELDS.SEARCH]: '',
};

export { initValues };
