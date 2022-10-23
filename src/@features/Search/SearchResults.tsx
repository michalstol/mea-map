import React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { MapBoxFeature } from '@typings/mapbox';

import { useAppDispatch } from '@redux/hooks';
import {
    getSearchIsActive,
    getSearchFetchStatus,
    getSearchResults,
    setSelectedPoiAction,
} from '@redux/search';

import Grid from '@atoms/Grid';
import List from '@atoms/List';

import { Result } from './Search.components';

function SearchResults(): React.ReactElement | null {
    const dispatch = useAppDispatch();

    const isActive = useSelector(getSearchIsActive);
    const fetchStatus = useSelector(getSearchFetchStatus);
    const fetchResults = useSelector(getSearchResults);

    const onSelectPoi = (poi: MapBoxFeature) => {
        if (!poi) return;

        dispatch(
            setSelectedPoiAction({
                address: poi.place_name,
                coordinates: {
                    lng: poi.center[0],
                    lat: poi.center[1],
                },
            })
        );
    };

    if (!isActive) {
        return null;
    }

    return (
        <div>
            {/* padding for search input */}

            {/* @TODO: results from firebase (search in saved poi) */}

            <Grid.Container>
                <Grid.Row>
                    <Grid.Column size={12}>
                        <List.Normalize>
                            {fetchResults.map(poi => (
                                <Result
                                    key={poi.id || poi.center[0]}
                                    name={poi.text}
                                    description={poi.place_name}
                                    onClick={() => onSelectPoi(poi)}
                                />
                            ))}
                        </List.Normalize>
                    </Grid.Column>
                </Grid.Row>
            </Grid.Container>
        </div>
    );
}

export { SearchResults };
