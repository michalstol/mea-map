function getCase<R = any>(key: string, map: { [key: string]: R }): R {
    const temp: {
        [key: string]: R | string;
    } = {
        default: '',
        ...map,
    };

    return (temp[key] || temp['default']) as R;
}

export { getCase };
