import React from 'react';

import { LoadingSpinner, Screen } from '@coconut/generic';
import { ListingComments, ListingHeader } from '@coconut/listing';
import { Resource, useSelectResourceFetchInLoadingState } from '@coconut/resource';

const ListingScreen = () => {
    const isLoading = useSelectResourceFetchInLoadingState(Resource.LISTING);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <Screen>
            <ListingHeader />
            <ListingComments />
        </Screen>
    );
};

export default ListingScreen;
