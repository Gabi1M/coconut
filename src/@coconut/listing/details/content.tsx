import React from 'react';
import { View } from 'react-native';

import { Listing } from '@coconut/models';

import ListingDescription from './description';
import ListingTitle from './title';
import ListingUrl from './url';

interface Props {
    listing: Listing;
}

const ListingContent = ({ listing }: Props) => (
    <View>
        <ListingTitle title={listing.data.title} />
        <ListingDescription listing={listing} />
        <ListingUrl url={listing.data.url_overridden_by_dest} />
    </View>
);

export default ListingContent;
