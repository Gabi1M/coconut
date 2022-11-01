import React from 'react';
import { View } from 'react-native';

import { Spinner } from '@ui-kitten/components';

import { ListingAndComments } from '@coconut/models';
import { Resource, useSelectResourceFetchData } from '@coconut/resource';

import { ListingMedia } from '../media';

import ListingContent from './content';

const ListingHeader = () => {
    const listingAndComments = useSelectResourceFetchData(Resource.LISTING) as
        | ListingAndComments
        | undefined;
    if (!listingAndComments || !listingAndComments.listing.data.children.length) {
        return <Spinner />;
    }

    const listing = listingAndComments.listing.data.children[0];
    return (
        <View>
            <ListingMedia listing={listing} />
            <ListingContent listing={listing} />
        </View>
    );
};

export default ListingHeader;
