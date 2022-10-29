import React from 'react';

import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { ListItem, SafeAreaScreen } from '@coconut/generic';
import { ListingCard } from '@coconut/listing';
import { Listing, Subreddit, Thing, ThingItemKind } from '@coconut/models';
import { Resource, useSelectResourceFetchData } from '@coconut/resource';
import { SearchBar } from '@coconut/search';

const renderItem: ListRenderItem<Subreddit | Listing> = ({ item }) => {
    if (item.kind !== ThingItemKind.LINK) {
        return <ListItem title={item.data.title} description={item.data.name} />;
    }

    return <ListingCard listing={item as Listing} />;
};
const keyExtractor = (item: Subreddit | Listing) => item.data.name;

const SearchScreen = () => {
    const searchResults = useSelectResourceFetchData(Resource.SEARCH) as
        | Thing<Subreddit | Listing>
        | undefined;

    return (
        <SafeAreaScreen>
            <SearchBar />
            {searchResults ? (
                <FlashList
                    data={searchResults.data.children}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    estimatedItemSize={50}
                />
            ) : null}
        </SafeAreaScreen>
    );
};

export default SearchScreen;
