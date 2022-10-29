import React from 'react';
import { View } from 'react-native';

import { Listing } from '@coconut/models';

import ListingDescription from './description';
import ListingTitle from './title';

interface Props {
    listing: Listing;
}

const ListingContent = ({ listing }: Props) => (
    <View>
        <ListingTitle title={listing.data.title} />
        <ListingDescription listing={listing} />
    </View>
);

export default ListingContent;
