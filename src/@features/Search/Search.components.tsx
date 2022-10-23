import React from 'react';
import { useFormikContext } from 'formik';
import styled from 'styled-components';

import { UseFetchReturn } from '@hooks/useFetch/useFetch';

import { useAppDispatch } from '@redux/hooks';
import { fetchSearchResultsAction } from '@redux/search';

import { SEARCH_FIELDS, SearchFormFields } from './Search.helpers';

interface FetchQueryProps {
    fetchData: UseFetchReturn['fetch'];
    isReady: boolean;
}

/**
 * Controls if and when asking for search results from API
 * @returns null
 */
function FetchQuery(props: FetchQueryProps): null {
    const dispatch = useAppDispatch();
    const { values } = useFormikContext<SearchFormFields>();

    const [timeoutNo, setTimeoutNo] = React.useState<NodeJS.Timeout | null>(
        null
    );

    const query = values[SEARCH_FIELDS.SEARCH];

    React.useEffect(() => {
        if (!props.isReady) return;
        if (!query || query.length < 3) return;
        if (timeoutNo) {
            clearTimeout(timeoutNo);
            setTimeoutNo(null);
        }

        const fetchFn = () => dispatch(fetchSearchResultsAction({ query }));

        setTimeoutNo(setTimeout(fetchFn, 300));
    }, [query, props.isReady]);

    return null;
}

interface ResetFormProps {
    isReady: boolean;
}

/**
 * Control when the FormikForm will be reset
 * @param param0
 * @returns
 */
function ResetForm({ isReady }: ResetFormProps): null {
    const { resetForm } = useFormikContext<SearchFormFields>();
    const [controlState, setControlState] = React.useState(false);

    React.useEffect(() => {
        if (isReady === controlState) return;
        if (isReady) {
            setControlState(isReady);
            return;
        }

        resetForm();
        setControlState(isReady);
    }, [isReady]);

    return null;
}

interface ResultProps {
    name: string;
    description: string;
    onClick: () => void;
}

/**
 *
 */
function Result(props: ResultProps): React.ReactElement {
    return (
        <ResultLi onClick={props.onClick}>
            <ResultText>{props.name}</ResultText>

            <ResultPlace>{props.description}</ResultPlace>
        </ResultLi>
    );
}

const ResultLi = styled.li`
    --mea-search-result-gap: calc(
        ${props => `${props.theme.sizes.base} + ${props.theme.sizes.half}`}
    );

    position: relative;
    margin: 0 0 var(--mea-search-result-gap);
    padding-bottom: var(--mea-search-result-gap);

    &:last-of-type {
        margin: 0;
        padding: 0;

        &::after {
            display: none;
        }
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: grey;
    }
`;

const ResultText = styled.div`
    font-weight: ${props => props.theme.fonts.weight.medium};
`;

const ResultPlace = styled.div`
    font-size: ${props => props.theme.fonts.size.small};
    line-height: 1.25;
`;

export { FetchQuery, ResetForm, Result };
