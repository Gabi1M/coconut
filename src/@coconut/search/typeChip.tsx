import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Icon, Text, useTheme } from '@ui-kitten/components';

import { Dimensions } from '@coconut/branding';
import { SearchItemType, SearchItemTypeLabel } from '@coconut/models';

interface Props {
    type: SearchItemType;
    onRemove: (item: SearchItemType) => void;
}

const SearchTypeChip = ({ type, onRemove }: Props) => {
    const styles = useStyles();

    const onPress = () => onRemove(type);

    return (
        <View style={styles.root}>
            <Text>{SearchItemTypeLabel[type]}</Text>
            <TouchableOpacity onPress={onPress}>
                <Icon style={styles.icon} name='close-outline' fill='orange' />
            </TouchableOpacity>
        </View>
    );
};

const useStyles = () => {
    const theme = useTheme();
    return StyleSheet.create({
        root: {
            backgroundColor: theme['color-basic-900'],
            padding: Dimensions.ternarySpacing,
            borderRadius: Dimensions.borderRadius,
            marginRight: Dimensions.ternarySpacing,
            flexDirection: 'row',
        },
        icon: {
            width: 18,
            height: 18,
            marginLeft: Dimensions.ternarySpacing / 2,
        },
    });
};

export default SearchTypeChip;
