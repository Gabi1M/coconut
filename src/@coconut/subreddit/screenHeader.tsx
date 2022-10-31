import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '@ui-kitten/components';

import { ListingFilterSelector } from '@coconut/listing';
import { ListingFilter } from '@coconut/models';
import { NavigationHeader } from '@coconut/navigation';

interface Props {
    subreddit: string;
    filter: ListingFilter;
    onListingFilterChange: (filter: ListingFilter) => void;
}

const SubredditScreenHeader = ({ subreddit, filter, onListingFilterChange }: Props) => (
    <NavigationHeader
        accessoryRight={<ListingFilterSelector filter={filter} onChange={onListingFilterChange} />}
    >
        <Text style={styles.text}>{subreddit}</Text>
    </NavigationHeader>
);

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    },
});

export default SubredditScreenHeader;
