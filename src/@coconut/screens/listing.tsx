import React from 'react';

import { LoadingSpinner, Screen } from '@coconut/generic';
import { ListingComments, ListingHeader } from '@coconut/listing';
import { NavigationHeader } from '@coconut/navigation';
import { Resource, useSelectResourceFetchInLoadingState } from '@coconut/resource';

const ListingScreen = () => {
    const isLoading = useSelectResourceFetchInLoadingState(Resource.LISTING);

    if (isLoading) {
        return (
            <Screen>
                <NavigationHeader />
                <LoadingSpinner />
            </Screen>
        );
    }

    return (
        <Screen>
            <NavigationHeader />
            <ListingHeader />
            <ListingComments />
        </Screen>
    );
};

export default ListingScreen;
