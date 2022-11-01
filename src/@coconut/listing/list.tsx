import React from 'react';

import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { LoadingSpinner, NoContent } from '@coconut/generic';
import { Listing } from '@coconut/models';

import { ListingCard } from './card';

interface Props {
    listings: Listing[] | undefined;
    isLoading?: boolean;
    onRefresh?: () => void;
}

const renderItem: ListRenderItem<Listing> = ({ item }) => <ListingCard listing={item} />;
const keyExtractor = (item: Listing) => item.data.name;

const ListingList = ({ listings, isLoading, onRefresh }: Props) => {
    if (isLoading === true || !listings) {
        return <LoadingSpinner />;
    }

    if (!listings.length) {
        return <NoContent />;
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
