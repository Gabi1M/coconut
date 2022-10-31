import React from 'react';

import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { LoadingSpinner } from '@coconut/generic';
import { Listing } from '@coconut/models';

import { ListingCard } from './card';
import NoListings from './noListings';

interface Props {
    listings: Listing[] | undefined;
    isLoading?: boolean;
    onRefresh?: () => void;
}

const renderItem: ListRenderItem<Listing> = ({ item }) => <ListingCard listing={item} />;
const keyExtractor = (item: Listing) => item.data.name;

const ListingList = ({ listings, isLoading, onRefresh }: Props) => {
    if (isLoading === false || !listings) {
        return <LoadingSpinner />;
    }

    if (!listings.length) {
        return <NoListings />;
    }

    return (
        <FlashList
            renderItem={renderItem}
            estimatedItemSize={310}
            data={listings}
            onEndReached={onRefresh}
            onEndReachedThreshold={2}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default ListingList;
