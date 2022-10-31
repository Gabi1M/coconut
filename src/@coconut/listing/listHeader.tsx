import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Icon, Text } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';
import { ListingFilter } from '@coconut/models';
import { useNavigateToSubreddits } from '@coconut/navigation';

import ListingFilterSelector from './filterSelector';

interface Props {
    filter: ListingFilter;
    onListingFilterChange: (filter: ListingFilter) => void;
}

const ListingListHeader = ({ filter, onListingFilterChange }: Props) => {
    const navigateToSubreddits = useNavigateToSubreddits();
    return (
        <View style={styles.root}>
            <TouchableOpacity style={styles.container} onPress={navigateToSubreddits}>
                <Icon style={styles.icon} fill='white' name='arrow-ios-back-outline' />
                <Text style={styles.text}>Subreddits</Text>
            </TouchableOpacity>
            <ListingFilterSelector filter={filter} onChange={onListingFilterChange} />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Dimensions.ternarySpacing / 2,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 32,
        height: 32,
    },
    text: {
        fontSize: 20,
    },
});

export default ListingListHeader;
