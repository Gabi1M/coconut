import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon, Text } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';
import { SelectMenu } from '@coconut/generic';
import { ListingFilter } from '@coconut/models';

interface Props {
    filter: ListingFilter;
    onChange: (filter: ListingFilter) => void;
}

const availableTypes = [
    ListingFilter.BEST,
    ListingFilter.HOT,
    ListingFilter.NEW,
    ListingFilter.RISING,
];

const itemRenderer = (item: ListingFilter) => (
    <View style={styles.container}>
        {FilterIconMapping[item]}
        <Text>{item.toUpperCase()}</Text>
    </View>
);

const ListingFilterSelector = ({ filter, onChange }: Props) => (
    <SelectMenu data={availableTypes} onSelect={onChange} itemRenderer={itemRenderer}>
        {itemRenderer(filter)}
    </SelectMenu>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: Dimensions.ternarySpacing,
    },
});

const FilterIconMapping = {
    [ListingFilter.BEST]: <Icon style={styles.icon} name='smiling-face-outline' fill='white' />,
    [ListingFilter.HOT]: (
        <Icon style={styles.icon} name='checkmark-circle-2-outline' fill='white' />
    ),
    [ListingFilter.NEW]: <Icon style={styles.icon} name='clock-outline' fill='white' />,
    [ListingFilter.RISING]: (
        <Icon style={styles.icon} name='arrow-circle-up-outline' fill='white' />
    ),
};

export default ListingFilterSelector;
