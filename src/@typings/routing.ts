export enum ROUTES {
    HOMEPAGE = '/',
    LOCATIONS = '/locations', // page with user locations
    CATEGORIES = '/categories', // page with user categories
    SETTINGS = '/settings',
    SEARCH = '/search', // view with search mechanism [read, add query from/to the url]
    RESULT = '/result', // view with selected search result [read, add poi data from/to the url]
    LOCATION = '/location/:id', // saved location
}

export interface Query {
    key: string;
    value: string;
}
