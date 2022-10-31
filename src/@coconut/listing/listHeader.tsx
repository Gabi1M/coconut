import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ListingFilter } from '@coconut/models';

import ListingFilterSelector from './filterSelector';

interface Props {
    filter: ListingFilter;
    onListingFilterChange: (filter: ListingFilter) => void;
}

const ListingListHeader = ({ filter, onListingFilterChange }: Props) => (
    <View style={styles.root}>
        <ListingFilterSelector filter={filter} onChange={onListingFilterChange} />
        <View style={styles.space} />
    </View>
);

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
    },
    space: {
        flexGrow: 1,
    },
});

export default ListingListHeader;
