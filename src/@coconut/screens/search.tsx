import React from 'react';

import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { ListItem, SafeAreaScreen } from '@coconut/generic';
import { Listing, Subreddit, Thing } from '@coconut/models';
import { Resource, useSelectResourceFetchData } from '@coconut/resource';
import { SearchBar } from '@coconut/search';

const renderItem: ListRenderItem<Subreddit | Listing> = ({ item }) => (
    <ListItem title={item.data.title} description={item.data.name} />
);
const keyExtractor = (item: Subreddit | Listing) => item.data.id;

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
